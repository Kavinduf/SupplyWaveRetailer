import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";

export default function MobileRegister({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header section start */}

      <Text onPress={() => navigation.navigate("MobileRegister")}>Back</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 70 }}>
          Verify Mobile Number
        </Text>
        <Text style={{ color: "#737373", marginTop: 15 }}>
          We senr a verification code to
        </Text>
        <Text style={{ color: "#000000", marginTop: 5, fontWeight: "bold" }}>
          0763622407
        </Text>
        <Text style={{ color: "#737373", marginTop: 5 }}>
          Enter the Code below
        </Text>

        {/* header section end */}

        {/* Image start */}

        <Image
          source={require("../assets/MobileVerification-image.png")}
          style={{
            width: 240,
            height: 240,
            marginTop: 20,
          }}
        />
        {/* Image  end */}

        {/* button start*/}

        <View
          style={{
            marginTop: 10,
            marginEnd: 10,
            marginStart: 10,
          }}
        >
          <Button
            color={"#BDE4B8"}
            radius={7}
            raised
            title={"VERIFY & CONTINUE"}
            titleStyle={{ color: "#000000", fontWeight: "bold", fontSize: 17 }}
            buttonStyle={{ height: 50 }}
          />
        </View>

        {/* button end*/}

        {/* Resend Code start */}
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ alignSelf: "center" }}>Didnt Receive Code?</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#2A8B00",
              marginStart: 10,
            }}
          >
            Resend Code
          </Text>
        </View>

        {/* Resend code end */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    // alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
    fontSize: 30,
  },
});
