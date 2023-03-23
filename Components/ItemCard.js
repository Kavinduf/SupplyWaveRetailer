import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemCard = ({ title, price, registerPage }) => {
  return (
    <View>
      {registerPage && <Text>Register Page true</Text>}
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
