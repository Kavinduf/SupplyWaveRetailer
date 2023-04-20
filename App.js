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
import OrderConfirmation from "./screens/OrderConfirmation";
import DeliveryStore from "./screens/DeliveryStore";
import AddNewShop from "./screens/AddNewShop";

export default function App() {
  const Stack = createNativeStackNavigator();

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ProfileRetailer"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MobileRegister" component={MobileRegister} />
          <Stack.Screen name="BrowseRetailer" component={BrowseRetailer} />
          <Stack.Screen name="ProfileRetailer" component={ProfileRetailer} />

          <Stack.Screen
            name="AddNewShop"
            component={AddNewShop}
            options={{
              headerShown: true,
              title: "Add new shop",
            }}
          />
          <Stack.Screen
            name="DeliveryStore"
            component={DeliveryStore}
            options={{
              headerShown: true,
              title: "Delivery store",
            }}
          />
          <Stack.Screen
            name="OrderConfirmation"
            component={OrderConfirmation}
            options={{
              headerShown: true,
              title: "Order Confirmation",
            }}
          />
          <Stack.Screen
            name="OrderTracking"
            component={OrderTracking}
            options={{
              headerShown: true,
              title: "Order tracking",
            }}
          />
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
