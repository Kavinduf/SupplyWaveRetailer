import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Input } from "@rneui/themed";

const textInput = ({ placeholder }) => {
  return (
    <View>
      <Input placeholder={placeholder} style={{ fontSize: 15 }} />
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({});
