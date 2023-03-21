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

      <Text onPress={() => navigation.navigate("Register")}>Back</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 70 }}>
          Continue With Phone
        </Text>
        <Text style={{ color: "#737373", marginTop: 15 }}>
          We will send One Time Password
        </Text>
        <Text style={{ color: "#737373", marginTop: 5 }}>
          to this phone number
        </Text>

        {/* header section end */}

        {/* Image & Input fields start */}

        <Image
          source={require("../assets/MobileRegister-image.png")}
          style={{
            width: 250,
            height: 250,
            marginTop: 20,
          }}
        />

        <Text style={{ color: "#737373", marginTop: 5 }}>
          Enter your phone number
        </Text>

        <Input
          textContentType="telephoneNumber"
          maxLength="10"
          textAlign="center"
          selectionColor="#2A8B00"
          keyboardType="phone-pad"
          placeholder="0761234567"
          style={{ marginTop: 10, fontSize: 15 }}
        />

        {/* Image & Input fields end */}

        {/* button start*/}

        <View
          style={{
            marginTop: 10,
            marginEnd: 10,
            marginStart: 10,
          }}
        >
          <Button
            onPress={() => navigation.navigate("MobileVerification")}
            color={"#BDE4B8"}
            radius={7}
            raised
            title={"SEND OTP"}
            titleStyle={{ color: "#000000", fontWeight: "bold", fontSize: 17 }}
            buttonStyle={{ height: 50 }}
          />
        </View>

        {/* button end*/}
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
