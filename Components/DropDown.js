import { StyleSheet, View } from "react-native";
import { Button, Card, Image } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import { Text } from "react-native";
import { useState } from "react";
// import DropDownPicker from "react-native-dropdown-picker";

const DropDown = ({ title, index }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <View
      style={{
        zIndex: index,
      }}
    >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        // setItems={setItems}
        // placeholder={title}
        categorySelectable={true}
        dropDownContainerStyle={{
          backgroundColor: "#FFF",
          marginTop: 10,
        }}
      />
    </View>
  );
};
export default DropDown;
