import { useContext, createContext, useReducer, useState } from "react";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import reducer from "./reducer";
import { auth } from "../firebase";
import { db } from "../firebase";
import { Alert } from "react-native";
import { SET_USER } from "./actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  user: null,
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        autoLogin,
        register,
        logout,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
