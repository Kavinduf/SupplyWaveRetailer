import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

const ItemDescription = ({ titleLeft, titleRight }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.textDetails}>{titleLeft}</Text>
      <Text style={styles.textDetails}>{titleRight}</Text>
    </View>
  );
};
export default ItemDescription;
const styles = StyleSheet.create({
  textDetails: {
    fontSize: 18,
    color: "gray",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
});
