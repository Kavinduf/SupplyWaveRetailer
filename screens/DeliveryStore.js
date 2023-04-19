import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GreenButton from "../Components/GreenButton";

const DeliveryStore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Ionicons
            name="radio-button-on-sharp"
            size={25}
            color="#2A8B00"
            style={{ alignSelf: "center" }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 5 }}>
              Delivery store
            </Text>
            <Text style={{ fontWeight: "400", marginBottom: 5 }}>
              Elisha Super Store
            </Text>
            <Text style={{ color: "gray", marginBottom: 3 }}>0770045454</Text>
            <Text style={{ width: 260, color: "gray", marginBottom: 3 }}>
              9/3, Canon Jacob Mendis Mawatha, Idama, Moratuwa
            </Text>
            <Text style={{ color: "#2A8B00", marginTop: 5 }}>Edit</Text>
          </View>
        </View>
      </View>
      {/* 2nd shop */}
      <View style={styles.TopView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Ionicons
            name="radio-button-off-sharp"
            size={25}
            color="#2A8B00"
            style={{ alignSelf: "center" }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 5 }}>
              Delivery store
            </Text>
            <Text style={{ fontWeight: "400", marginBottom: 5 }}>
              Elisha Super Store
            </Text>
            <Text style={{ color: "gray", marginBottom: 3 }}>0770045454</Text>
            <Text style={{ width: 260, color: "gray", marginBottom: 3 }}>
              9/3, Canon Jacob Mendis Mawatha, Idama, Moratuwa
            </Text>
            <Text style={{ color: "#2A8B00", marginTop: 5 }}>Edit</Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <GreenButton title={"Add new"} />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryStore;

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
    marginTop: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
});
