import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import { Image } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

const OrderItemCard = ({ OrderNumber, Time, Date, Total }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.TopView}
        // onPress={() => navigation.navigate({OrderDetails})}
      >
        <View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={styles.textLeft}>Order Number: </Text>
            <Text style={styles.textRight}>{OrderNumber}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={styles.textLeft}>Time: </Text>
            <Text style={styles.textRight}>
              {Date} {Time}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={styles.textLeft}>Total price:</Text>
            <Text style={styles.textRight}>LKR {Total}.00</Text>
          </View>
        </View>
        <View>
          <AntDesign name="right" size={20} color="#2A8B00" />
        </View>
      </Pressable>
    </View>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  TopView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    marginTop: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  textLeft: {
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
  },
  textRight: {
    fontSize: 15,
    fontWeight: "500",
  },
});
