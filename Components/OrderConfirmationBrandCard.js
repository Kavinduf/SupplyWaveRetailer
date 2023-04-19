import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import OrderConfirmationItemCard from "../screens/OrderConfirmationItemCard";
const OrderConfirmationBrandCard = ({
  brand,
  title,
  pieces,
  unitPrice,
  quantity,
  total,
}) => {
  return (
    <View style={styles.cartItem}>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome5
          name="store"
          size={15}
          color="#2A8B00"
          style={{ marginTop: 2 }}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.brand}>{brand}</Text>
        </View>
      </View>
      <View style={styles.divider}></View>

      {/* Item start */}
      <OrderConfirmationItemCard
        title={title}
        unitPrice={unitPrice}
        quantity={quantity}
        total={total}
      />
      <OrderConfirmationItemCard
        title={title}
        unitPrice={unitPrice}
        quantity={quantity}
        total={total}
      />
      {/* Item end */}
    </View>
  );
};

export default OrderConfirmationBrandCard;

const styles = StyleSheet.create({
  cartItem: {
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  brand: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
    marginStart: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#f2f2f2",
    marginBottom: 5,
  },
});
