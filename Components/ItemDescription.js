import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

const ItemDescription = ({ titleLeft, titleRight }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.textDetailsLeft}>{titleLeft}</Text>
      <Text style={styles.textDetailsRight}>{titleRight}</Text>
    </View>
  );
};
export default ItemDescription;
const styles = StyleSheet.create({
  textDetailsRight: {
    fontSize: 16,
    color: "gray",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 10,
    marginLeft: "auto",
  },
  textDetailsLeft: {
    fontSize: 16,
    color: "gray",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
});
