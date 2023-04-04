import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import ShoppingCartItem from "../Components/ShoppingCartItem";

const ShoppingCart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ShoppingCartItem
          title={" Maliban 100gggggggggggg (12Pc)"}
          pieces={"12"}
          brand={"Maliban (pvt) Ltd"}
          unitPrice={"LKR 1500.00"}
        />
        <ShoppingCartItem
          title={" Maliban Cream Crackers 100g (12Pc)"}
          pieces={"12"}
          brand={"Maliban (pvt) Ltd"}
          unitPrice={"LKR 1500.00"}
        />
        <ShoppingCartItem
          title={" Maliban Cream Crackers 100g (12Pc)"}
          pieces={"12"}
          brand={"Maliban (pvt) Ltd"}
          unitPrice={"LKR 1500.00"}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || ,
    backgroundColor: "#EEE",
  },
});
