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
import DropDownPicker from "react-native-dropdown-picker";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CatergoryCard from "../Components/CategoryCard";

// tab Categories start

function CategoriesScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Beverages"
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
        // listParentContainerStyle={{
        //   borderColor: "#FFF",
        // }}
        // listChildContainerStyle={{
        //   borderColor: "#FFF",
        // }}
        // listParentLabelStyle={{
        //   fontWeight: "bold",
        //   fontSize: 15,
        // }}
        // listChildLabelStyle={{
        //   fontWeight: "300",
        // }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Buiscuits"
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Buiscuits"
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Buiscuits"
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Buiscuits"
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Buiscuits"
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Buiscuits"
        categorySelectable={true}
      />
    </View>
  );
}

// tab Categories end

//   Tab Brands start

function BrandsScreen() {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
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
    </View>
  );
}

//   Tab Brands end

const Tab = createMaterialTopTabNavigator();

const BrowseRetailer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 19,
            color: "black",
            fontWeight: "700",
            textTransform: "capitalize",
          },
          tabBarStyle: { backgroundColor: "#F5F5F5" },
          tabBarIndicatorStyle: {
            backgroundColor: "#2A8B00",
            height: 3,
            width: 120,
            marginLeft: 35,
            borderRadius: 50,
          },
        }}
      >
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Brands" component={BrandsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BrowseRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
