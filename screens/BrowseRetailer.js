import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
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
import CategoryCard from "../Components/CategoryCard";
import DropDown from "../Components/DropDown";
import SelectButtons from "../Components/SelectButtons";
import { db } from "../firebase";
import { getDocs, doc, collection } from "firebase/firestore";

// tab Categories start

function CategoriesScreen({ navigation }) {
  const optionsNew = {
    Beverages: ["Beverage1", "Beverage2"],
    Food: ["Food1", "Food1"],
  };
  const [open, setOpen] = useState({});
  const [categories, setCategories] = useState([99, 5, 4, 3, 2, 1]);
  const [value, setValue] = useState(null);

  // console.log(Object.keys(optionsNew));

  // const [options, setOptions] = useState(["Beverages", "Food", "safaas"]);
  const [options, setOptions] = useState([]);

  const [selectedType, setSelectType] = useState(null);

  const [subOptions, setSubOptions] = useState(null);

  const [selectedSubType, setSelectedSubType] = useState([]);

  const onSearch = () => {
    navigation.navigate("ViewCategories", {
      selectedType: categories[selectedType],
      selectedSubType: selectedSubType,
    });
  };

  useEffect(() => {
    const data = [];
    const init = async () => {
      const categories = await getDocs(collection(db, "categories"));
      categories.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      // console.log(data);
      setCategories(data);
    };

    init();
  }, []);

  useEffect(() => {
    const mappedCategories = categories.map((category) => {
      return Object.keys(category)[0];
    });
    setOptions({ type: mappedCategories });
  }, [categories]);

  useEffect(() => {
    console.log("selectedType", selectedType);

    if (selectedType === null || !categories) {
      return;
    }

    //
    const subCategories = [];
    setSelectedSubType([]);

    const category = categories?.find((category, index) => {
      return index === selectedType;
    });

    const values = Object.values(category)[0];

    console.log("category", values);

    setOptions({ ...options, subType: values });
  }, [selectedType]);

  // ]);
  return (
    <ScrollView>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          gap: 20,
          marginBottom: 15,
        }}
      >
        {options?.type && options?.type.length > 0 && (
          <SelectButtons
            options={options.type}
            selectedOption={selectedType}
            setSelectedOption={setSelectType}
          />
        )}
        {options?.subType && options?.subType.length > 0 && (
          <>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600" }}>
                Sub Categories
              </Text>
            </View>
            <SelectButtons
              options={options.subType}
              selectedOption={selectedSubType}
              setSelectedOption={setSelectedSubType}
            />
          </>
        )}
        <Button
          title={"Search"}
          color={"#BDE4B8"}
          titleStyle={{ color: "#000000", fontWeight: "bold", fontSize: 19 }}
          radius={7}
          buttonStyle={{ height: 50 }}
          raised
          onPress={onSearch}
        />
      </View>
    </ScrollView>
  );
}

// tab Categories end

//   Tab Brands start

function BrandsScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);

  const init = async () => {
    const data = [];
    const brands = await getDocs(collection(db, "manufacturers"));
    brands.docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    console.log(data);
    setBrands(data);
  };

  useEffect(() => {
    init();
  }, []);

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
          <FlatList
            numColumns={2}
            data={brands}
            renderItem={({ item }) => (
              <CategoryCard
                {...item}
                title={item.shopName}
                navigation={navigation}
              />
            )}
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
