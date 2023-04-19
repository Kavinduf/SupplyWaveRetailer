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
import BrowseRetailer from "./screens/BrowseRetailer";
import ProfileRetailer from "./screens/ProfileRetailer";
import EditProfileRetailer from "./screens/EditProfileRetailer";
import ChangePassword from "./screens/ChangePassword";
import OrderTracking from "./screens/OrderTracking";

export default function App() {
  const Stack = createNativeStackNavigator();

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeRetailer"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MobileRegister" component={MobileRegister} />
          <Stack.Screen name="BrowseRetailer" component={BrowseRetailer} />
          <Stack.Screen name="ProfileRetailer" component={ProfileRetailer} />
          <Stack.Screen name="OrderTracking" component={OrderTracking} />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              headerShown: true,
              title: "Account",
            }}
          />
          <Stack.Screen
            name="EditProfileRetailer"
            component={EditProfileRetailer}
            options={{
              headerShown: true,
              title: "Account",
            }}
          />
          <Stack.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              headerShown: true,
              title: "Shopping Cart",
            }}
          />
          <Stack.Screen
            name="HomeRetailer"
            component={HomeRetailer}
            options={{
              headerShown: false,
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
