import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, Image } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { Feather } from "@expo/vector-icons";

const ItemCard = ({ title, price, brand, registerPage, pieces }) => {
  return (
    <Card
      wrapperStyle={styles.container}
      containerStyle={{ backgroundColor: "#FFF", borderRadius: 10 }}
    >
      {/* {registerPage && <Text>Register Page true</Text>} */}

      <Image
        source={require("../assets/login-png.png")}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDescriptionLeft}>Pieces :</Text>
          <Text style={styles.textDescriptionRight}>{pieces}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDescriptionLeft}>Brand :</Text>
          <Text style={styles.textDescriptionRight}>{brand}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "flex-end" }}>
            <Text style={styles.textPrice}>LKR {price}</Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <Feather
              name="shopping-cart"
              type="font-awesome"
              color="#2A8B00"
              size={20}
            />
          </View>
        </View>
        {/* <Button
          containerStyle={{
            marginTop: 10,
          }}
          title={"Add to cart"}
        /> */}
      </View>
    </Card>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    justifyContent: "space-between",
  },
  textContainer: {
    justifyContent: "center",
    width: 205,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  textDescriptionLeft: {
    fontWeight: "400",
    paddingStart: 1,
    fontSize: 13,
  },
  textDescriptionRight: {
    fontWeight: "500",
    color: "gray",
    paddingStart: 5,
    fontSize: 13,
  },
  textPrice: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
});
