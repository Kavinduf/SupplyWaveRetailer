import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeRetailer from "./HomeRetailer";

const Drawer = createDrawerNavigator();

const HomeRetailerDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomeRetailer} />
    </Drawer.Navigator>
  );
};

export default HomeRetailerDrawer;

const styles = StyleSheet.create({});
