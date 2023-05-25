import { useContext, createContext, useReducer, useState } from "react";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import reducer from "./reducer";
import { auth, db, storage } from "../firebase";
import { Alert, Linking } from "react-native";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_USER,
  UPDATE_CART,
  UPDATE_USER,
} from "./actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  user: null,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (user) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const docRef = await setDoc(
        doc(db, "retailers", userCredential.user.uid),
        {
          name: user.name,
          email: user.email,
          nic: user.nic,
          address: user.address,
          uid: userCredential.user.uid,
          mobileNumber: user.mobileNumber,
        }
      );
      dispatch({
        type: SET_USER,
        payload: {
          name: user.name,
          email: user.email,
          nic: user.nic,
          address: user.address,
          mobileNumber: user.mobileNumber,
          uid: userCredential.user.uid,
        },
      });
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  const login = async (user) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const userData = await getDoc(
        doc(db, "retailers", userCredential.user.uid)
      );

      if (!userData.exists()) {
        Alert.alert("Error", "Invalid user");
        return;
      }

      await AsyncStorage.setItem("user", JSON.stringify(userData.data()));
      dispatch({ type: SET_USER, payload: userData.data() });
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  const autoLogin = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch({ type: SET_USER, payload: user });
    }
  };

  const logout = async () => {
    auth.signOut();
    await AsyncStorage.removeItem("user");
    dispatch({ type: SET_USER, payload: null });
  };

  const uploadImage = async (image, fileName) => {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `images/${fileName}`);
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const updateUser = async (user, image) => {
    try {
      let url = "";
      const userJson = {
        name: user.name,
        nic: user.nic,
        mobileNumber: user.mobileNumber,
        address: user.address,
      };
      if (image) {
        url = await uploadImage(image, user.uid);
        userJson.image = url;
      }
      const docRef = await updateDoc(doc(db, "retailers", user.uid), userJson);

      dispatch({
        type: UPDATE_USER,
        payload: {
          ...userJson,
        },
      });
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  const addToCart = async (product, qty) => {
    dispatch({ type: ADD_TO_CART, payload: { ...product, qty } });
  };

  const removeFromCart = async (index) => {
    dispatch({ type: REMOVE_FROM_CART, payload: index });
  };

  const updateCart = async (product, qty) => {
    dispatch({ type: UPDATE_CART, payload: { ...product, qty } });
  };

  const clearCart = async () => {
    dispatch({ type: CLEAR_CART });
  };

  const openMap = async (address) => {
    try {
      const destination = encodeURIComponent(`${address}`);
      const provider = Platform.OS === "ios" ? "apple" : "google";
      const link = `http://maps.${"google"}.com/?daddr=${destination}`;
      const supported = await Linking.canOpenURL(link);

      if (supported) Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        autoLogin,
        register,
        logout,
        login,
        updateUser,
        uploadImage,
        addToCart,
        removeFromCart,
        updateCart,
        clearCart,
        openMap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
