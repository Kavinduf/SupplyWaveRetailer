import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, Image } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";

const DropDown = ({ title }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={title}
      categorySelectable={true}
      dropDownContainerStyle={{
        backgroundColor: "#FFF",
        marginTop: 10,
      }}
      // listParentContainerStyle={{
      //   borderColor: "#FFF",
      // }}
      // listChildContainerStyle={{
      //   borderColor: "#FFF",
      // }}
      // listParentLabelStyle={{
      //   fontWeight: "bold",
      //   fontSize: 15,
      // }}
      // listChildLabelStyle={{
      //   fontWeight: "300",
      // }}
    />
  );
};
export default DropDown;
