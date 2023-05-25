import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Button, Card, Image } from "@rneui/themed";

const CategoryCard = ({
  image,
  title,
  navigation,
  id,
  mobileNumber,
  city,
  address,
  shopName,
}) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate("BrandDetails", {
          brand: {
            title: title,
            image: image,
            id,
            mobileNumber,
            city,
            address,
            shopName,
          },
        })
      }
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {image && (
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        )}
        {!image && (
          <Image
            style={styles.image}
            source={require("../assets/login-png.png")}
          />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default memo(CategoryCard);

const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginHorizontal: "1%",
    height: 170,
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
