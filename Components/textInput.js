import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Input } from "@rneui/themed";

const TextInput = ({ placeholder, textContent }) => {
  return (
    <View>
      <Input
        placeholder={placeholder}
        textContentType={textContent}
        style={{ fontSize: 15 }}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
