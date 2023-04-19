import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Image } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ProfileRetailer = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.TopView}>
        <View
          style={{
            justifyContent: "flex-end",
            alignSelf: "flex-start",
            paddingStart: 10,
            paddingTop: 10,
            width: 220,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Kavindu Fernando
          </Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 15,
              color: "grey",
              marginTop: 5,
            }}
          >
            0763622407
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Ratings</Text>
            <View style={{ alignSelf: "center", marginStart: 3, marginEnd: 3 }}>
              <FontAwesome5
                name="grip-lines-vertical"
                size={13}
                color="black"
              />
            </View>
            <View style={{ alignSelf: "center", flexDirection: "row" }}>
              <AntDesign name="star" size={15} color="#2A8B00" />
              <AntDesign name="star" size={15} color="#2A8B00" />
              <AntDesign name="star" size={15} color="#2A8B00" />
              <AntDesign name="staro" size={15} color="#2A8B00" />
              <AntDesign name="staro" size={15} color="#2A8B00" />
            </View>
          </View>
        </View>
        <View></View>
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/login-png.png")}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View
          style={{ flexDirection: "row", paddingStart: 5, marginTop: 15 }}
          onClick={() => {
            navigation.navigate("EditProfileRetailer");
          }}
        >
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              alignSelf: "center",
              marginStart: 20,
            }}
          >
            Profile
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingStart: 7, marginTop: 40 }}>
          <Fontisto name="shopping-store" size={17} color="black" />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              alignSelf: "center",
              marginStart: 20,
            }}
          >
            Shops
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingStart: 9, marginTop: 40 }}>
          <FontAwesome5 name="clipboard-list" size={20} color="black" />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              alignSelf: "center",
              marginStart: 22,
            }}
          >
            Orders
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingStart: 8, marginTop: 40 }}>
          <FontAwesome name="envelope" size={18} color="black" />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              alignSelf: "center",
              marginStart: 20,
            }}
          >
            Messeges
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingStart: 8, marginTop: 40 }}>
          <Ionicons name="ios-settings-sharp" size={20} color="black" />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              alignSelf: "center",
              marginStart: 20,
            }}
          >
            Settings
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 10,
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
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 10,
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
    marginTop: 10,
    paddingBottom: 20,
  },
});
