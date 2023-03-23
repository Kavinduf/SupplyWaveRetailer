import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";
import GreenButton from "../Components/GreenButton";

export default function DocumentsFirstPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header section start */}

      <Text onPress={() => navigation.navigate("MobileRegister")}>Back</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 70 }}>
          Enter A Photo Of Your
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 5 }}>
          Documents
        </Text>
        <Text style={{ color: "#737373", marginTop: 15 }}>
          Please make sure the details are
        </Text>
        <Text style={{ color: "#737373", marginTop: 5 }}>clearly visible</Text>

        {/* header section end */}

        {/* Image start */}

        <Image
          source={require("../assets/DocumentsFirstPage-image.png")}
          style={{
            width: 240,
            height: 240,
            marginTop: 40,
          }}
        />
        {/* Image  end */}

        {/* button start*/}

        <View
          style={{
            marginTop: 80,
            marginEnd: 10,
            marginStart: 10,
          }}
        >
          <GreenButton
            onClick={() => {
              navigation.navigate("Register");
            }}
            title={"CONTINUE"}
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
