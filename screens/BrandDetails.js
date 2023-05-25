import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Pressable,
  FlatList,
  TextInput,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "@rneui/base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ItemCard from "../Components/ItemCard";
import { db } from "../firebase";
import {
  getDocs,
  doc,
  collection,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { Dialog, Input, Button, Icon } from "@rneui/themed";
import { useAppContext } from "../context/appContext";

const BrandDetails = ({ route }) => {
  console.log(route.params.brand);
  const [items, setItems] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const { addToCart } = useAppContext();

  const pressCall = () => {
    const url = "tel://" + route.params.brand.mobileNumber;
    Linking.openURL(url);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const q = query(
        collection(db, "products"),
        where("manufacturerId", "==", route.params.brand.id)
      );

      const querySnapshot = await getDocs(q);
      const items = [];
      for (let i = 0; i < querySnapshot.docs.length; i++) {
        const doc = querySnapshot.docs[i];
        items.push({
          ...doc.data(),
          id: doc.id,
          manufacturer: {
            id: route.params.brand.id,
            shopName: route.params.brand.title,
          },
        });
      }

      console.log(items);
      setItems(items);
    };
    fetchItems();
  }, []);

  const onCartIconClicked = (product) => {
    setSelectedProduct(product);
    setDialogVisible(true);
  };

  const onAddToCart = () => {
    addToCart(selectedProduct, qty);
    setDialogVisible(false);
    setQty(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Dialog
        isVisible={dialogVisible}
        onBackdropPress={() => setDialogVisible(false)}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {selectedProduct?.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {selectedProduct?.brand}
          </Text>
          <Image
            source={{
              uri: selectedProduct?.image,
            }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
              gap: 5,
            }}
          >
            <Ionicons
              name="add-circle-outline"
              size={30}
              onPress={() => {
                if (qty === "") {
                  setQty(1);
                  return;
                }

                setQty(qty + 1);
              }}
            />
            <TextInput
              placeholder="Qty"
              value={qty.toString()}
              onChangeText={(text) => setQty(text)}
              keyboardType="number-pad"
              input
              style={{
                width: 40,
                marginVertical: 10,
                marginHorizontal: 0,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            />
            <Ionicons
              name="remove-circle-outline"
              size={30}
              onPress={() => {
                if (qty === "") {
                  setQty(1);
                  return;
                }
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
            />
          </View>

          <Button
            type="outline"
            title={"Add to Cart"}
            color={"green"}
            radius={5}
            raised
            onPress={onAddToCart}
            buttonStyle={{
              borderColor: "green",
              width: 200,
            }}
            titleStyle={{
              color: "green",
            }}
          />
        </View>
      </Dialog>
      <View style={styles.TopView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {!route.params.brand.image && (
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/login-png.png")}
            />
          )}
          {route.params.brand.image && (
            <Image
              style={{ height: 100, width: 100, borderRadius: 15 }}
              source={{
                uri: route.params.brand.image,
              }}
            />
          )}

          <View style={{ marginStart: 20 }}>
            <Text style={{ fontSize: 23, fontWeight: "600", width: 225 }}>
              {route.params.brand.title}
            </Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                gap: -5,
                marginHorizontal: -5,
              }}
            >
              <Ionicons name="location-sharp" size={20} color="#2A8B00" />

              <View style={styles.pickupView}>
                <Text style={{ fontWeight: "500", width: 220 }}>
                  {route.params.brand.address}
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                gap: 5,
                flexDirection: "row",
                marginTop: 5,
              }}
              onPress={pressCall}
            >
              <Icon
                type="feather"
                name="phone-call"
                size={15}
                color="#2A8B00"
              />
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {route.params.brand.mobileNumber}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginStart: 15,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        All Products
      </Text>
      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ItemCard {...item} onCartIconClicked={onCartIconClicked} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default BrandDetails;

const styles = StyleSheet.create({
  TopView: {
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#BDE4B8",
    // borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    marginHorizontal: 15,
    borderRadius: 15,

    // borderColor: "#2A8B00",
    // borderWidth: 2,
    // borderStyle: "dotted",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 15,
  },
  pickupView: {
    // backgroundColor: "#BDE4B8",
    padding: 1,
    borderRadius: 5,
    marginStart: 5,
    marginBottom: 5,
  },
});
