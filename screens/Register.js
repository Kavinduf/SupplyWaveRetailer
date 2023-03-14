import { StyleSheet, Text, View } from "react-native";
import React from "react";
import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";

export default function Register({ navigation }) {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
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
