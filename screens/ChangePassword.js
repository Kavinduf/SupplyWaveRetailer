import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import GreenButton from "../Components/GreenButton";

const ChangePassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", padding: 15 }}>
          Change password
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            paddingHorizontal: 17,
            marginTop: 10,
          }}
        >
          New password
        </Text>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Input
            textContentType="password"
            selectionColor="#2A8B00"
            autoCapitalize={false}
            placeholder="••••••••••"
            secureTextEntry={true}
            rightIcon={{
              type: "feather",
              name: "eye-off",
              size: 18,
            }}
            style={{ fontSize: 15 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            paddingHorizontal: 17,
            marginTop: 10,
          }}
        >
          Confirm New password
        </Text>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Input
            textContentType="password"
            selectionColor="#2A8B00"
            placeholder="••••••••••"
            autoCapitalize={false}
            secureTextEntry={true}
            rightIcon={{
              type: "feather",
              name: "eye-off",
              size: 18,
            }}
            style={{ fontSize: 15 }}
          />
        </View>
        <View style={styles.button}>
          <GreenButton title={"Update"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    backgroundColor: "#FFF",
  },
  button: {
    marginHorizontal: 15,
    marginTop: 50,
  },
});
