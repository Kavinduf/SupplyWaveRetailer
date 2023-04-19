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
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CatergoryCard from "../Components/CategoryCard";
import DropDown from "../Components/DropDown";
import SelectButtons from "../Components/SelectButtons";

// tab Categories start

function CategoriesScreen() {
  const optionsNew = {
    Beverages: ["Beverage1", "Beverage2"],
    Food: ["Food1", "Food1"],
  };
  const [open, setOpen] = useState({});
  const [categories, setCategories] = useState([99, 5, 4, 3, 2, 1]);
  const [value, setValue] = useState(null);

  // console.log(Object.keys(optionsNew));

  // const [options, setOptions] = useState(["Beverages", "Food", "safaas"]);
  const [options, setOptions] = useState(Object.keys(optionsNew));

  const [selectedType, setSelectType] = useState(null);

  const [subOptions, setSubOptions] = useState(null);

  const [selectedSubType, SetSelectSubType] = useState(null);

  useEffect(() => {
    if (!selectedType) return;
    // console.log(selectedType);
    // const option = Object.keys(optionsNew)[selectedType];
    // console.log(Object.keys(optionsNew)[selectedType]);
    // console.log(optionsNew[option]);
    // setSubOptions(() => [...optionsNew[option]]);
  }, [selectedType]);
  // const [items, setItems] = useState([
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ]);
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20, gap: 20 }}>
      {/* <View>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Type</Text>
      </View> */}
      <SelectButtons
        options={options}
        selectedOption={selectedType}
        setSelectedOption={setSelectType}
      />
      {subOptions && (
        <>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>
              Sub Categories
            </Text>
          </View>
          <SelectButtons
            options={subOptions}
            selectedOption={selectedSubType}
            setSelectedOption={SetSelectSubType}
          />
        </>
      )}
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
