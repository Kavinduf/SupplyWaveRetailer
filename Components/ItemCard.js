import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, Image } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { Feather } from "@expo/vector-icons";

const ItemCard = ({ title, price, Brand, registerPage, Description }) => {
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
        <Text>{title}</Text>
        <Text>{Description}</Text>
        <Text>{Brand}</Text>
        <Text>{price} LKR</Text>

        {/* <Button
          containerStyle={{
            marginTop: 10,
          }}
          title={"Add to cart"}
        /> */}
      </View>
      <Feather
        style={styles.iconContainer}
        name="shopping-cart"
        type="font-awesome"
        color="#2A8B00"
        size={24}
      />
    </Card>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#FFF",
  },
  textContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    marginStart: 80,
  },
});
