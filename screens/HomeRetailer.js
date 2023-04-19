import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import { color, Icon, SearchBar, Button, Card, Image } from "@rneui/base";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState, TouchableOpacity } from "react";
import ItemCard from "../Components/ItemCard";
//

const HomeRetailer = () => {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      {/* SearchBAr Start */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <View>
          <Text style={styles.text}>Deliver To</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontWeight: "500" }}>Shop1</Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <AntDesign name="down" size={14} color="black" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "black",
            borderRadius: 20,
            padding: 8,
            gap: 8,
          }}
        >
          <FontAwesome5 name="clipboard-list" size={15} color="#FFF" />
          <Text style={styles.text}>Orders</Text>
        </View>
      </View>

      <SearchBar
        lightTheme="true"
        round="true"
        value={search}
        onChangeText={setSearch}
        placeholder="Browse our products"
        selectionColor="#2A8B00"
        // leftIconContainerStyle={{ backgroundColor: "#FFFFFF" }}
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInput}
        inputContainerStyle={styles.searchInputContainer}
        returnKeyType="search"
        style={{ backgroundColor: "#FFF" }}
        searchIcon={{ color: "#2A8B00", size: 25 }}
        rightIcon={{}}
      ></SearchBar>

      {/* Searchbar End */}
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text>Brands</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>All</Text>
            <AntDesign name="right" size={15} color="black" />
          </View>
        </View>
      </View>
      {/* Item Cards Start */}

      <View>
        <ItemCard
          title={"Maliban Cream Crackers 100g (12Pc)"}
          price={1500}
          brand={"Maliban Pvt Ltd"}
          pieces={12}
          registerPage={true}
        />
        <ItemCard
          title={"Maliban Cream Crackers 100g (12Pc)"}
          price={1500}
          brand={"Maliban Pvt Ltd"}
          pieces={12}
        />
        <ItemCard
          title={"Maliban Cream Crackers 100g (12Pc)"}
          price={1500}
          brand={"Maliban Pvt Ltd"}
          pieces={12}
          registerPage={true}
        />
        <ItemCard
          title={"Maliban Cream Crackers 100g (12Pc)"}
          price={1500}
          brand={"Maliban Pvt Ltd"}
          pieces={12}
        />
      </View>

      {/* Item cards End */}
    </SafeAreaView>
  );
};

export default HomeRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    // marginHorizontal: 10,
    backgroundColor: "#F5F5F5",
  },
  cardWrapperContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  cardContainer: {
    width: "50%",
    marginHorizontal: 0,
  },
  searchContainer: {
    padding: 0,
    borderRadius: 30,
    marginTop: 0,
    marginHorizontal: 15,
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
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
});
