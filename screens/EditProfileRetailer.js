import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Image, Input } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";

const EditProfileRetailer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <Text style={styles.heading}>Account Info</Text>
        <View style={{ alignSelf: "center" }}>
          <Image
            style={styles.image}
            source={require("../assets/login-png.png")}
          />
          <View style={styles.editImage}>
            <Text style={styles.editImageText}>Edit image</Text>
            <Feather name="edit-3" size={16} color="black" />
          </View>
        </View>
        <Text style={styles.basic}>Basic Info</Text>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 10,
              paddingLeft: 10,
            }}
          >
            Name
          </Text>
          <Input
            textContentType="name"
            selectionColor="#2A8B00"
            placeholder="Kavindu Fernando"
            style={{ fontSize: 16 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 10,
              paddingLeft: 10,
            }}
          >
            Phone number
          </Text>
          <Input
            textContentType="telephoneNumber"
            selectionColor="#2A8B00"
            keyboardType="phone-pad"
            placeholder="0761234567"
            style={{ fontSize: 16 }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginTop: 10,
            paddingLeft: 10,
          }}
        >
          Password
        </Text>
        <Input
          textContentType="password"
          selectionColor="#2A8B00"
          placeholder="••••••••••"
          secureTextEntry={true}
          style={{ fontSize: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfileRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    backgroundColor: "#FFF",
  },
  TopView: {
    justifyContent: "space-between",
    padding: 10,
    // marginHorizontal: 10,

    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 2.5,
    // elevation: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  editImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  editImageText: { fontSize: 15, fontWeight: "500", marginEnd: 3 },
  basic: {
    fontSize: 20,
    padding: 10,
    fontWeight: "700",
    marginTop: 10,
  },
});
