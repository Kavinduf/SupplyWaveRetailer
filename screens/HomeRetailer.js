import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ItemCard from "../Components/ItemCard";
import { color, Icon, SearchBar } from "@rneui/base";
import { Button, Card, Image } from "@rneui/themed";

const HomeRetailer = () => {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        {/* <Icon
          type="feather"
          name="align-justify"
          color="#2A8B00"
          size={28}
          style={{ alignSelf: "flex-start", marginStart: 15, marginEnd: 90 }}
        /> */}
        {/* <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            marginEnd: 80,
          }}
        >
          SupplyWave
        </Text> */}
        {/* <View
          style={{
            backgroundColor: "#BDE4B8",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingStart: 0,
            borderRadius: 13,
            width: 65,
            flexDirection: "row",
          }}
        > */}
        {/* <Icon
          name="shopping-cart"
          type="font-awesome"
          color="#2A8B00"
          size={28}
          style={{ marginEnd: 15 }}
        /> */}
        {/* <Text style={{ fontWeight: "bold", fontSize: 17 }}>1</Text>
        </View> */}
      </View>

      {/* SearchBAr Start */}

      <SearchBar
        lightTheme="true"
        round="true"
        value={search}
        onChangeText={setSearch}
        placeholder="Browse our products"
        // leftIconContainerStyle={{ backgroundColor: "#FFFFFF" }}
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          marginTop: 0,
          marginHorizontal: 10,
          // color: "#FFFFFF",
        }}
        inputStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        returnKeyType="search"
        style={{ backgroundColor: "#FFFFFF" }}
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
  );
};

export default HomeRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
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
});
