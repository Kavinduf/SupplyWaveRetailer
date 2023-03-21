import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate("Login")}>Back</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 70 }}>
          Choose Catergory
        </Text>
        <Text style={{ color: "#737373", marginTop: 10 }}>To enroll</Text>

        {/* Catergory buttons */}

        {/* Retailer button start*/}

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => navigation.navigate("MobileRegister")}
            radius={7}
            raised
            color={"#E7EFE6"}
            // title={"Retailer"}
            titleStyle={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: 17,
              marginRight: 110,
              marginLeft: 10,
            }}
            buttonStyle={{
              height: 120,
              width: 300,
              borderWidth: 3,
              borderColor: "#2A8B00",
            }}
          >
            Retailer
            <Image
              source={require("../assets/retailer-register-image.png")}
              style={{
                width: 80,
                height: 80,
              }}
            />
          </Button>
        </View>

        {/* Retailer button end      */}

        {/* Manufacturer button start       */}

        <View style={{ marginTop: 40 }}>
          <Button
            onPress={() => navigation.navigate("MobileRegister")}
            radius={7}
            raised
            color={"#E7EFE6"}
            // title={"Retailer"}
            titleStyle={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: 17,
              marginRight: 60,
              marginLeft: 10,
            }}
            buttonStyle={{
              height: 120,
              width: 300,
              borderWidth: 3,
              borderColor: "#2A8B00",
            }}
          >
            Manufacturer
            <Image
              source={require("../assets/manufacturer-register-image.png")}
              style={{
                width: 80,
                height: 80,
              }}
            />
          </Button>
        </View>

        {/* Manufacturer button end       */}

        {/* Driver button start       */}

        <View style={{ marginTop: 40 }}>
          <Button
            onPress={() => navigation.navigate("MobileRegister")}
            radius={7}
            raised
            color={"#E7EFE6"}
            // title={"Retailer"}
            titleStyle={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: 17,
              marginRight: 120,
              marginLeft: 10,
            }}
            buttonStyle={{
              height: 120,
              width: 300,
              borderWidth: 3,
              borderColor: "#2A8B00",
            }}
          >
            Driver
            <Image
              source={require("../assets/driver-register-image.png")}
              style={{
                width: 85,
                height: 80,
              }}
            />
          </Button>
        </View>

        {/* Driver button end    */}
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
