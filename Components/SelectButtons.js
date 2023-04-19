import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SelectButtons = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        if (option === "Other") return null;
        return (
          <Text
            key={index}
            style={[styles.option, selectedOption === index && styles.selected]}
            onPress={() => {
              setSelectedOption(index);
            }}
          >
            {option}
          </Text>
        );
      })}
    </View>
  );
};

export default SelectButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    // marginHorizontal: 10,
  },
  option: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    fontSize: 16,
  },
  selected: {
    backgroundColor: "black",
    color: "#fff",
  },
});
