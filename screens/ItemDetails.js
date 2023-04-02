import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const ItemDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#fff",
  },
});
