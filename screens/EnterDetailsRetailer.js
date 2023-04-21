import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from "react";
// import DropDown from "../Components/DropDown";
import GreenButton from "../Components/GreenButton";
import { KeyboardAvoidingView } from "react-native";
import { Dialog } from "@rneui/themed";
import { useAppContext } from "../context/appContext";

const EnterDetailsRetailer = ({ navigation, route }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    nic: "",
    address: "",
    password: "",
    mobileNumber: route.params.mobileNumber,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAppContext();

  const onRegister = async () => {
    if (
      state.name === "" ||
      state.email === "" ||
      state.nic === "" ||
      state.address === "" ||
      state.password === "" ||
      state.mobileNumber === ""
    ) {
      Alert.alert("Please fill all the fields");
      return;
    }
    try {
      setIsLoading(true);
      await register({
        name: state.name,
        email: state.email,
        nic: state.nic,
        address: state.address,
        password: state.password,
        mobileNumber: state.mobileNumber,
      });
      setIsLoading(false);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
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
          behavior="position"
          style={{ flex: 1, padding: 20 }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            Get Started
          </Text>
          <View style={styles.textInput}>
            <TextInput
              editable
              value={state.name}
              onChangeText={(text) =>
                setState({
                  ...state,
                  name: text,
                })
              }
              textContentType="name"
              selectionColor="#2A8B00"
              placeholder="Name*"
              placeholderTextColor="gray"
              // numberOfLines={4}
              // value={value}
              style={{ padding: 10 }}
            />
          </View>

          <View style={styles.textInput}>
            <TextInput
              editable
              value={state.nic}
              onChangeText={(text) =>
                setState({
                  ...state,
                  nic: text,
                })
              }
              textContentType="name"
              selectionColor="#2A8B00"
              placeholder="NIC number*"
              placeholderTextColor="gray"
              // numberOfLines={4}
              maxLength={13}
              // value={value}
              style={{ padding: 10 }}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              editable
              numberOfLines={4}
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
              value={state.email}
              onChangeText={(text) =>
                setState({
                  ...state,
                  email: text,
                })
              }
              textContentType="emailAddress"
              selectionColor="#2A8B00"
              placeholder="Email*"
              placeholderTextColor="gray"
              // numberOfLines={4}
              // value={value}
              style={{ padding: 10 }}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              editable
              value={state.password}
              onChangeText={(text) =>
                setState({
                  ...state,
                  password: text,
                })
              }
              textContentType="password"
              secureTextEntry={true}
              selectionColor="#2A8B00"
              placeholder="Password*"
              placeholderTextColor="gray"
              // numberOfLines={4}
              // value={value}
              style={{ padding: 10 }}
            />
          </View>
          <View style={styles.button}>
            <GreenButton title={"Register"} onClick={onRegister} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnterDetailsRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    flex: 1,

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
    marginBottom: 20,
  },
});
