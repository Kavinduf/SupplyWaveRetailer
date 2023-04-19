import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Rating = () => {
  const [defualtRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = <AntDesign name="star" size={24} color="black" />;
  const starImgCorner = <AntDesign name="staro" size={24} color="black" />;

  return (
    <View style={styles.ratingBar}>
      {maxRating.mao((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onpress={() => setdefaultRating(item)}
          >
            <AntDesign name="star" size={24} color="black" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingBar: {
    justifyContent: "center",
    flexDirection: "row",
  },
});
