import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import ShoppingCartItem from "../Components/ShoppingCartItem";
import GreenButton from "../Components/GreenButton";

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
        <ShoppingCartItem
          title={" Maliban Cream Crackers 100g (12Pc)"}
          pieces={"12"}
          brand={"Maliban (pvt) Ltd"}
          unitPrice={"LKR 1500.00"}
        />
      </View>
      <View style={styles.viewTotal}>
        <Text style={styles.textTotal}>SubTotal</Text>
        <Text style={styles.textPrice}>LKR 5000.00</Text>
      </View>
      <View style={styles.viewButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go to checkout</Text>
        </View>
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
    marginTop: 7,
  },
  viewContainer: {
    backgroundColor: "#FFF",
  },
  viewButton: {
    backgroundColor: "#FFF",
    paddingBottom: 25,
    justifyContent: "center",
    paddingTop: 20,
    // alignItems: "center",
  },
  button: {
    backgroundColor: "#BDE4B8",
    marginTop: 5,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    height: 50,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  viewTotal: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    marginTop: 5,
    paddingTop: 5,
  },
  textTotal: {
    fontWeight: "700",
    marginStart: 15,
    fontSize: 17,
    paddingTop: 10,
    // justifyContent: "flex-start",
  },
  textPrice: {
    fontWeight: "700",
    marginEnd: 10,
    fontSize: 17,
    paddingTop: 10,
  },
});
