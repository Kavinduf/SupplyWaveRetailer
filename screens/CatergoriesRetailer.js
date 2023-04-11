import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import {
  color,
  Icon,
  SearchBar,
  Button,
  Card,
  Image,
  Tab,
  TabView,
} from "@rneui/base";
import React, { useState } from "react";
import CatergoryCard from "../Components/CatergoryCard";

const CatergoriesRetailer = () => {
  const [search, setSearch] = useState("");
  const [index, setIndex] = React.useState(0);
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
            placeholder="Browse our products"
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
        {/* Tab start */}

        <View style={{ marginTop: 10 }}>
          <Tab
            containerStyle={{ backgroundColor: "#F5F5F5" }}
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={styles.indicator}
            variant="primary"
          >
            <Tab.Item title="Catergories" titleStyle={styles.tabTitle} />
            <Tab.Item title="Brands" titleStyle={styles.tabTitle} />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
              <Text h1>Recent</Text>
            </TabView.Item>
          </TabView>
        </View>

        {/* Tab end */}

        <View>
          <CatergoryCard></CatergoryCard>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CatergoriesRetailer;

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
