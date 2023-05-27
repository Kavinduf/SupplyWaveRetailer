import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import ShoppingCartItem from "../Components/ShoppingCartItem";
import GreenButton from "../Components/GreenButton";
import { useAppContext } from "../context/appContext";

const ShoppingCart = ({ navigation }) => {
  const { cart } = useAppContext();
  const [total, setTotal] = useState();

  useEffect(() => {
    console.log(cart);
    setTotal(cart.reduce((acc, item) => acc + item.price * item.qty, 0));
    console.log(total);
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      {cart.length === 0 && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          No Items in the cart
        </Text>
      )}
      <FlatList
        style={{
          gap: 3,
        }}
        data={cart}
        renderItem={({ item, index }) => (
          <ShoppingCartItem {...item} index={index} />
        )}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.viewTotal}>
        <Text style={styles.textTotal}>SubTotal</Text>
        <Text style={styles.textPrice}>LKR {total}</Text>
      </View>

      <View style={styles.viewButton}>
        {cart.length > 0 && (
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("OrderConfirmation")}
          >
            <Text style={styles.buttonText}>Go to checkout</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#EEE",
  },
  viewContainer: {
    backgroundColor: "#FFF",
  },
  viewButton: {
    backgroundColor: "#FFF",
    paddingBottom: 25,
    justifyContent: "center",
    paddingTop: 20,
    // alignItems: "center",
  },
  button: {
    backgroundColor: "#BDE4B8",
    marginTop: 5,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    height: 50,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  viewTotal: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    marginTop: 5,
    paddingTop: 5,
  },
  textTotal: {
    fontWeight: "700",
    marginStart: 15,
    fontSize: 17,
    paddingTop: 10,
    // justifyContent: "flex-start",
  },
  textPrice: {
    fontWeight: "700",
    marginEnd: 10,
    fontSize: 17,
    paddingTop: 10,
  },
});
