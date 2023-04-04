import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const ShoppingCart = () => {
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#EEE",
    justifyContent: "center",
  },
});
