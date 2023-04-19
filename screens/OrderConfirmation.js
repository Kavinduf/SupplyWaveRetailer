import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Image } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import OrderConfirmationBrandCard from "../Components/OrderConfirmationBrandCard";
import GreenButton from "../Components/GreenButton";

const OrderConfirmation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <FontAwesome5 name="map-marker-alt" size={19} color="#2A8B00" />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 5 }}>
              Delivery store
            </Text>
            <Text style={{ fontWeight: "400", marginBottom: 5 }}>
              Elisha Super Store
            </Text>
            <Text style={{ color: "gray", marginBottom: 3 }}>0770045454</Text>
            <Text style={{ width: 250, color: "gray", marginBottom: 3 }}>
              9/3, Canon Jacob Mendis Mawatha, Idama, Moratuwa
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      {/* Cart items start */}

      <OrderConfirmationBrandCard
        brand={"Maliban pvt ltd"}
        title={"Cream Crackers 100g"}
        pieces={25}
        unitPrice={5000}
        quantity={3}
        total={15000}
      />
      <OrderConfirmationBrandCard
        brand={"Maliban pvt ltd"}
        title={"Cream Crackers 100g"}
        pieces={25}
        unitPrice={5000}
        quantity={3}
        total={15000}
      />
      {/* Cart items end */}
      <View style={styles.bottomView}>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>LKR 50000.00</Text>
        </View>
        <View style={styles.button}>
          <GreenButton title={"Continue to Payment"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  bottomView: {
    padding: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  total: { fontSize: 15, fontWeight: "700" },
  button: {
    marginTop: 20,
  },
});
