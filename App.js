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
import { AppProvider, useAppContext } from "./context/appContext";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const TabNavigator = ({ navigation }) => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeRetailer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Browse"
          component={BrowseRetailer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileRetailer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={MobileRegister} />
          <Stack.Screen name="HomeRetailer" component={TabNavigator} />
          <Stack.Screen name="MobileRegister" component={MobileRegister} />
          <Stack.Screen name="BrowseRetailer" component={BrowseRetailer} />
          <Stack.Screen name="ProfileRetailer" component={ProfileRetailer} />

          <Stack.Screen
            name="AddNewShop"
            component={AddNewShop}
            options={{
              headerShown: true,
              title: "Add new store",
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
              title: "Edit profile",
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
          {/* <Stack.Screen
            name="HomeRetailer"
            component={HomeRetailer}
            options={{
              headerShown: false,
            }}
          /> */}

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
      <AppProvider>
        <StackNavigator />
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
