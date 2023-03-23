import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import ItemCard from "../Components/ItemCard";

const HomeRetailer = () => {
  return (
    <View style={styles.container}>
      <ItemCard title={"Title"} price={200} registerPage={true} />
      <ItemCard title={"Title"} price={200} />
      <ItemCard title={"Title"} price={200} registerPage={true} />
      <ItemCard title={"Title"} price={200} />
    </View>
  );
};

export default HomeRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
});
