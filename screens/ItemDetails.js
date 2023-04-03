import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import ItemDescription from "../Components/ItemDescription";
import { AntDesign } from "@expo/vector-icons";

const ItemDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          source={require("../assets/login-png.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Maliban Crackers Cream 100g (12Pc)</Text>
        <Text style={styles.textPrice}>LKR 1500.00</Text>

        {/* The single item weight which is "100g" and pieces in a pack which is "12" in this case must be taken seprately when inserting items by manufacturer so that the single item weight and pieaces count can be displayed beside the item name */}
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textSubtitle}>Description</Text>
        <ItemDescription
          titleLeft={"Pieces in a Package"}
          titleRight={"12 Pc"}
        />
        <ItemDescription titleLeft={"Brand"} titleRight={"Maliban"} />
        <ItemDescription titleLeft={"Weight"} titleRight={"2 KG"} />
        <ItemDescription titleLeft={"Dimentions"} titleRight={"21x16cm"} />
      </View>

      <View style={styles.separator}>
        <View style={styles.row}>
          <AntDesign
            name="minuscircleo"
            size={35}
            color={"black"}
            onPress={onMinus}
          />
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign
            name="pluscircleo"
            size={35}
            color={"black"}
            onPress={onPlus}
          />
        </View>
      </View>
      <View style={styles.viewButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Add {quantity} to basket - LKR 1500
          </Text>
        </View>
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
    justifyContent: "center",
  },
  viewImage: {
    alignItems: "center",
  },
  viewText: {
    marginTop: 5,
    backgroundColor: "#FFF",
    // marginHorizontal: 10,
    // alignItems: "flex-start",
    // borderRadius: 10,
    padding: 15,
  },
  image: {
    width: "50%",
    height: "50%",
  },
  textTitle: {
    fontSize: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  textSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  textPrice: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginTop: 5,
  },
  separator: {
    marginTop: 5,
    backgroundColor: "#FFF",
    padding: 10,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    borderRadius: 40,
    padding: 10,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  viewButton: {
    backgroundColor: "#FFF",
    paddingBottom: 50,
    // alignItems: "center",
  },
  button: {
    backgroundColor: "#BDE4B8",
    marginTop: 5,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
