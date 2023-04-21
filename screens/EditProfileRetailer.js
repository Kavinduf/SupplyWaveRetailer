import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Image, Input } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import GreenButton from "../Components/GreenButton";

const EditProfileRetailer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        {/* <Text style={styles.heading}>Account Info</Text> */}
        <View style={{ alignSelf: "center" }}>
          <Image
            style={styles.image}
            source={require("../assets/login-png.png")}
          />
          <View style={styles.editImage}>
            <Text style={styles.editImageText}>Edit image</Text>
            <Feather name="edit-3" size={16} color="black" />
          </View>
        </View>
        <Text style={styles.basic}>Basic Info</Text>
        <View style={styles.textInput}>
          <TextInput
            editable
            // value={state.mobileNumber}
            // onChangeText={(text) =>
            //   setState({
            //     ...state,
            //     mobileNumber: text,
            //   })
            // }
            textContentType="name"
            selectionColor="#2A8B00"
            placeholder="name*"
            placeholderTextColor="gray"
            // numberOfLines={4}
            // value={value}
            style={{ padding: 10 }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            editable
            // value={state.mobileNumber}
            // onChangeText={(text) =>
            //   setState({
            //     ...state,
            //     mobileNumber: text,
            //   })
            // } */}
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
        <View style={styles.textInput}>
          <TextInput
            editable
            // value={state.nic}
            // onChangeText={(text) =>
            //   setState({
            //     ...state,
            //     nic: text,
            //   })
            // }
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
        {/* <View>
          <Text style={styles.text}>Name</Text>
          <Input
            textContentType="name"
            selectionColor="#2A8B00"
            placeholder="Kavindu Fernando"
            style={{ fontSize: 16 }}
          />
          <Text style={styles.text}>Phone number</Text>
          <Input
            textContentType="telephoneNumber"
            selectionColor="#2A8B00"
            keyboardType="phone-pad"
            placeholder="0761234567"
            style={{ fontSize: 16 }}
          />
        </View> */}
      </View>
      <Pressable
        style={styles.changePassword}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Text style={styles.ChangePasswordText}>Change password</Text>
        <AntDesign name="right" size={18} color="black" />
      </Pressable>
      <View style={styles.button}>
        <GreenButton title={"Save"} />
      </View>
      {/* <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginTop: 10,
            paddingLeft: 10,
          }}
        >
          Password
        </Text>
        <Input
          textContentType="password"
          selectionColor="#2A8B00"
          placeholder="••••••••••"
          secureTextEntry={true}
          style={{ fontSize: 16 }}
        /> */}
    </SafeAreaView>
  );
};

export default EditProfileRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  editImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  editImageText: { fontSize: 15, fontWeight: "500", marginEnd: 3 },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    paddingLeft: 10,
  },
  basic: {
    fontSize: 19,
    padding: 10,
    fontWeight: "700",
    marginTop: 10,
  },
  changePassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  ChangePasswordText: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 10,
  },
  button: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  textInput: {
    // backgroundColor: value,
    borderColor: "#bcbcbc",
    borderWidth: 1,
    padding: 5,
    marginTop: 15,
    borderRadius: 10,
  },
});
