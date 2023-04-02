import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import ItemDescription from "../Components/ItemDescription";

const ItemDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.viewImage}>
        <Image
          source={require("../assets/login-png.png")}
          style={styles.image}
        />
      </View> */}
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Maliban Crackers 100g(12Pc)</Text>
        <Text style={styles.textPrice}>LKR 1500.00</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textSubtitle}>Description</Text>
        <ItemDescription
          titleLeft={"Pieces in a Package"}
          titleRight={"12 Pieces"}
        />
        <ItemDescription titleLeft={"Brand"} titleRight={"Maliban"} />
        <ItemDescription titleLeft={"Weight"} titleRight={"2 KG"} />
        <ItemDescription titleLeft={"Dimentions"} titleRight={"21x16cm"} />
      </View>
    </SafeAreaView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#EEE",
  },
  viewImage: {
    alignItems: "center",
  },
  viewText: {
    marginTop: 10,
    backgroundColor: "#FFF",
    // marginHorizontal: 10,
    // alignItems: "flex-start",
    // borderRadius: 10,
    padding: 15,
  },
  image: {
    width: "70%",
    height: "70%",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  textSubtitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  textPrice: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  textDetails: {
    fontSize: 18,
    color: "gray",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
});
