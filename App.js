import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MobileRegister from "./screens/MobileRegister";
import MobileVerification from "./screens/MobileVerification";
import DocumentsFirstPage from "./screens/DocumentsFirstPage";
import HomeRetailer from "./screens/HomeRetailer";
import EnterDetailsRetailer from "./screens/EnterDetailsRetailer";
import HomeRetailerDrawer from "./screens/HomeRetailerDrawer";
import ItemDetails from "./screens/ItemDetails";
import ShoppingCart from "./screens/ShoppingCart";

export default function App() {
  const Stack = createNativeStackNavigator();

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ItemDetails"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MobileRegister" component={MobileRegister} />
          <Stack.Screen name="ItemDetails" component={ItemDetails} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen
            name="HomeRetailer"
            component={HomeRetailer}
            options={{
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="MobileVerification"
            component={MobileVerification}
          />
          <Stack.Screen
            name="DocumentsFirstPage"
            component={DocumentsFirstPage}
          />
          <Stack.Screen
            name="EnterDetailsRetailer"
            component={EnterDetailsRetailer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
