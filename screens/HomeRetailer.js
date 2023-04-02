import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import ItemCard from "../Components/ItemCard";
import { color, Icon, SearchBar } from "@rneui/base";
import { Button, Card, Image } from "@rneui/themed";

const HomeRetailer = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {/* SearchBAr Start */}

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
          style={{ backgroundColor: "#EEEEEE" }}
          searchIcon={{ color: "#2A8B00", size: 25 }}
        ></SearchBar>

        {/* Searchbar End */}

        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            gap: 0,
            paddingHorizontal: 10,
          }}
        >
          <Card
            containerStyle={styles.cardContainer}
            wrapperStyle={styles.cardWrapperContainer}
          >
            <Icon name="tag" type="font-awesome" color="#2A8B00" size={15} />
            <Text style={{ fontWeight: "bold" }}>Brands</Text>
          </Card>

          <Card
            containerStyle={styles.cardContainer}
            wrapperStyle={styles.cardWrapperContainer}
          >
            <Icon name="filter" type="font-awesome" color="#2A8B00" size={15} />
            <Text style={{ fontWeight: "bold" }}>Filter</Text>
          </Card>
        </View>

        {/* Item Cards Start */}

        <View>
          <ItemCard
            title={"Title"}
            price={200}
            Brand={"Brand"}
            Description={"Description"}
            registerPage={true}
          />
          <ItemCard
            title={"Title"}
            price={200}
            Brand={"Brand"}
            Description={"Description"}
          />
          <ItemCard
            title={"Title"}
            price={200}
            Brand={"Brand"}
            Description={"Description"}
            registerPage={true}
          />
          <ItemCard
            title={"Title"}
            price={200}
            Brand={"Brand"}
            Description={"Description"}
          />
        </View>

        {/* Item cards End */}
      </SafeAreaView>
    </View>
  );
};

export default HomeRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#fff",
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
    marginHorizontal: 10,
    // color: "#FFFFFF",
  },
  searchInput: { backgroundColor: "#EEE", borderRadius: 30, padding: 0 },
  searchInputContainer: {
    backgroundColor: "#EEE",
    borderRadius: 30,
    paddingStart: 5,
  },
});
