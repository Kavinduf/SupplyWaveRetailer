import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import {
  color,
  Icon,
  SearchBar,
  Button,
  Card,
  Image,
  TabView,
} from "@rneui/base";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CatergoryCard from "../Components/CategoryCard";

// tab Categories start

function Categories() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        {/* searchbar start */}

        <View>
          <SearchBar
            lightTheme="true"
            round="true"
            value={search}
            onChangeText={setSearch}
            placeholder="Search brands"
            selectionColor="#2A8B00"
            // leftIconContainerStyle={{ backgroundColor: "#FFFFFF" }}
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
            inputContainerStyle={styles.searchInputContainer}
            returnKeyType="search"
            style={{ backgroundColor: "#FFF" }}
            searchIcon={{ color: "#2A8B00", size: 25 }}
          ></SearchBar>
        </View>

        {/* SearchBar end */}

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
          <CatergoryCard
            image={require("../assets/login-png.png")}
            title={"Buiscuits"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// tab Categories end

//   Tab Brands start

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

//   Tab Brands end

const Tab = createMaterialTopTabNavigator();

const BrowseRetailer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BrowseRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    backgroundColor: "#F5F5F5",
  },
  searchContainer: {
    padding: 0,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    // color: "#FFFFFF",
  },
  searchInput: { backgroundColor: "#FFF", borderRadius: 30, padding: 0 },
  searchInputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingStart: 5,
  },
  indicator: {
    backgroundColor: "#2A8B00",
    height: 3,
    width: 120,
    marginLeft: 25,
  },
  tabTitle: {
    fontSize: 17,
    color: "black",
    fontWeight: "600",
  },
});
