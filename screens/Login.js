import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/login-png.png")}
            style={{
              width: 200,
              height: 200,
              marginBottom: 50,
            }}
          />
        </View>

        {/* input fields */}

        <Text style={styles.LableAlign}>Phone Number</Text>
        <View style={{ flexDirection: "row" }}>
          <Input
            keyboardType="phone-pad"
            placeholder="0761234567"
            rightIcon={{
              type: "feather",
              name: "check",
              size: "18",
            }}
          />
        </View>

        <Text style={styles.LableAlign}>Password</Text>
        <View style={{ flexDirection: "row" }}>
          <Input
            placeholder="••••••••••"
            secureTextEntry={true}
            rightIcon={{
              type: "feather",
              name: "eye-off",
              size: "18",
            }}
          />
        </View>

        <Text
          style={{
            alignItems: "center",
            marginTop: 0,
            marginBottom: 10,
            marginEnd: 10,
            alignSelf: "flex-end",
            color: "#2A8B00",
          }}
        >
          Forgot?
        </Text>

        {/* button */}

        <View style={{ marginTop: 10, marginEnd: 10, marginStart: 10 }}>
          <Button
            color={"#BDE4B8"}
            radius={5}
            raised
            title={"SIGN IN"}
            titleStyle={{ color: "#000000", fontWeight: "bold", fontSize: 17 }}
            buttonStyle={{ height: 50 }}
          ></Button>
          {/* <Button onPress={() => navigation.navigate("Register")}>
          Go to register
        </Button> */}
        </View>

        {/* Text below button */}

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ alignSelf: "flex-start", marginStart: 15 }}>
            Don't Have Account?
          </Text>
          <Text
            style={{
              marginLeft: 115,
              fontWeight: "bold",
              marginEnd: 10,
              color: "#2A8B00",
            }}
          >
            Sign Up
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    // alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    fontSize: 30,
  },

  LableAlign: {
    marginStart: 10,
    color: "#737373",
  },

  //   BtnLogin
  // {
  //   borderRadius: 10,
  //   backgroundColor: "#FFCC59",
  //   Margin: 20,
  // }
});
