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
    borderColor: "#2A8B00",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    backgroundColor: "white",
  },
  selected: {
    backgroundColor: "#BDE4B8",
    // color: "#fff",
  },
});
