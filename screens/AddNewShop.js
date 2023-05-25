import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import { db } from "../firebase";
import React, { useState } from "react";
// import DropDown from "../Components/DropDown";
import GreenButton from "../Components/GreenButton";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { KeyboardAvoidingView } from "react-native";
import { Dialog } from "@rneui/themed";
import { useAppContext } from "../context/appContext";

const AddNewShop = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppContext();
  const [state, setState] = useState({
    shopName: route.params?.item?.shopName || "",
    mobileNumber: route.params?.item?.mobileNumber || "",
    address: route.params?.item?.address || "",
    province: route.params?.item?.province || "",
    city: route.params?.item?.city || "",
    zipCode: route.params?.item?.zipCode || "",
    selected: route.params?.item?.selected || false,
  });

  const onAdd = async () => {
    if (
      state.name === "" ||
      state.mobileNumber === "" ||
      state.address === "" ||
      state.province === "" ||
      state.city === "" ||
      state.zipCode === ""
    ) {
      Alert.alert("Please fill all fields");
      return;
    }
    const data = [];
    setIsLoading(true);
    const shops = await getDocs(collection(db, "retailers", user.uid, "shops"));
    shops.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    let selected = false;
    if (data && data.length <= 0) {
      selected = true;
    }
    const docRef = await addDoc(
      collection(db, "retailers", user.uid, "shops"),
      {
        ...state,
        selected,
      }
    );
    Alert.alert("Shop Added");
    setIsLoading(false);
    setState({
      shopName: "",
      mobileNumber: "",
      address: "",
      province: "",
      city: "",
      zipCode: "",
    });
  };

  const onEdit = async () => {
    if (
      state.name === "" ||
      state.mobileNumber === "" ||
      state.address === "" ||
      state.province === "" ||
      state.city === "" ||
      state.zipCode === ""
    ) {
      Alert.alert("Please fill all fields");
      return;
    }
    console.log(route.params.item.id);
    setIsLoading(true);
    await updateDoc(
      doc(db, "retailers", user.uid, "shops", route.params.item.id),
      {
        ...state,
      }
    );
    Alert.alert("Shop Updated");
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Dialog
          isVisible={isLoading}
          sty
          overlayStyle={{
            width: 90,
            height: 90,
          }}
        >
          <Dialog.Loading />
        </Dialog>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" && "position"}
          keyboardVerticalOffset={Platform.OS === "ios" && 20}
        >
          <View style={styles.TopView}>
            <Text style={styles.title}>Contact information</Text>
            <View style={styles.textInput}>
              <TextInput
                editable
                value={state.shopName}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    shopName: text,
                  })
                }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Shop name*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                value={state.mobileNumber}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    mobileNumber: text,
                  })
                }
                textContentType="telephoneNumber"
                selectionColor="#2A8B00"
                keyboardType="phone-pad"
                placeholder="Mobile number*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                maxLength={10}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
          </View>
          <View style={styles.TopView}>
            <Text style={styles.title}>Address</Text>
            <View style={styles.textInput}>
              <TextInput
                editable
                value={state.address}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    address: text,
                  })
                }
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Address*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Province*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                value={state.province}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    province: text,
                  })
                }
                // value={value}
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="City*"
                placeholderTextColor="gray"
                // numberOfLines={4}
                value={state.city}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    city: text,
                  })
                }
                style={{ padding: 10 }}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                editable
                textContentType="name"
                selectionColor="#2A8B00"
                placeholder="Zipcode*"
                keyboardType="phone-pad"
                placeholderTextColor="gray"
                // numberOfLines={4}
                value={state.zipCode}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    zipCode: text,
                  })
                }
                style={{ padding: 10 }}
              />
            </View>
          </View>
          {!route?.params?.item && (
            <View style={styles.button}>
              <GreenButton title={"Add shop"} onClick={onAdd} />
            </View>
          )}
          {route?.params?.item && (
            <View style={styles.button}>
              <GreenButton title={"Edit shop"} onClick={onEdit} />
            </View>
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    marginTop: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  textInput: {
    // backgroundColor: value,
    borderColor: "#bcbcbc",
    borderWidth: 1,
    padding: 5,
    marginTop: 15,
    borderRadius: 5,
  },
  button: {
    marginHorizontal: 15,
    marginTop: 40,
  },
});
