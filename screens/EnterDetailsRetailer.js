import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import TextInput from "../Components/TextInput";
import { Button, Input } from "@rneui/themed";

const EnterDetailsRetailer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input
        selectionColor="#2A8B00"
        placeholder="First Name"
        style={{
          fontSize: 15,
          borderColor: "#000000",
          borderWidth: 1,
          borderBottomWidth: 2,
          borderRadius: 7,
        }}
      />
    </SafeAreaView>
  );
};

export default EnterDetailsRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
});
