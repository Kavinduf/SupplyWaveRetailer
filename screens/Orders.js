import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
// import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { db } from "../firebase";
import {
  getDocs,
  doc,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import OrderCard from "../Components/OrdersPage/OrderCard";
import { useAppContext } from "../context/appContext";

const Orders = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAppContext();

  const init = async () => {
    setOrders([]);
    //ggg
    setIsLoading(true);
    const q = query(
      collection(db, "orders"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    let temp = [];
    querySnapshot.forEach((doc) => {
      temp.push({ ...doc.data(), id: doc.id });
    });
    setOrders(temp);
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderCard item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({});
