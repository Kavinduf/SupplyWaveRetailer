import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const AddNewShop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <Text style={styles.title}>Contact information</Text>
        <View>
          <TextInput />
        </View>
      </View>
      <View style={styles.TopView}>
        <Text style={styles.title}>Address</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddNewShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    marginTop: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
});
