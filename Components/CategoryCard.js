import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, Image } from "@rneui/themed";

const CatergoryCard = ({ image, title }) => {
  return (
    <View style={styles.card}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CatergoryCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 140,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 8,
    marginTop: 8,
  },
  image: {
    width: 160,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    textAlign: "center",
  },
});
