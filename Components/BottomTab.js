import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeRetailer from "../screens/HomeRetailer";
import BrowseRetailer from "../screens/BrowseRetailer";
import ProfileRetailer from "../screens/ProfileRetailer";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeRetailer} />
      <Tab.Screen name="Browse" component={BrowseRetailer} />
      <Tab.Screen name="Messeges" component={HomeRetailer} />
      <Tab.Screen name="Profile" component={ProfileRetailer} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
