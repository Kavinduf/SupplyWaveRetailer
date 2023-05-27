import {
  StripeProvider,
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import { Button, Dialog } from "@rneui/themed";
import { Alert } from "react-native";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAppContext } from "../context/appContext";

const Stripe = ({ order, navigation, deliverStore }) => {
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState("");

  const { clearCart, user } = useAppContext();

  const openPaymentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setPaymentLoading(true);
      await addOrderToDB();
      setPaymentLoading(false);
      clearCart();
      navigation.navigate("Home");
      Alert.alert("Success", "Payment is confirmed!");
    }
  };

  const addOrderToDB = async () => {
    for (let i = 0; i < order.length; i++) {
      await addDoc(collection(db, "orders"), {
        ...order[i],
        status: "pending",
        total: order[i].items.reduce((acc, item) => {
          return acc + item.price * item.qty;
        }, 0),
        userId: user.uid,
        deliverStore: deliverStore,
        createdAt: new Date(),
      });
    }
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      paymentIntentId,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();
    setPaymentIntentId(paymentIntentId);

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
      returnURL: "http://192.168.8.101:5000",
    });
    console.log(paymentIntentId);
    if (!error) {
      setLoading(true);
    }
  };

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`http://192.168.8.101:5000`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: order.reduce((acc, item) => {
          return (
            acc +
            item.items.reduce((acc, item) => {
              return acc + item.price * item.qty;
            }, 0)
          );
        }, 0),
      }),
    });
    const { paymentIntent, paymentIntentId, ephemeralKey, customer } =
      await response.json();

    return {
      paymentIntentId,
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider
      publishableKey="pk_test_51N9nsNJS4a5jZOk37qveW8SoO1LWE2E9kSBHWvZaLJqz5WE1jbmqBMWcODyTvPCwle9qtKiLYBjnAnKroUwrkVBR00C2etyTLV"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Dialog
        isVisible={paymentLoading}
        overlayStyle={{
          width: 90,
          height: 90,
        }}
      >
        <Dialog.Loading />
      </Dialog>
      <Button
        title={"Continue to Payment"}
        color={"#BDE4B8"}
        radius={7}
        raised
        onPress={openPaymentSheet}
        disabled={!loading}
        titleStyle={{ color: "#000000", fontWeight: "bold", fontSize: 17 }}
        buttonStyle={{ height: 50 }}
      />
    </StripeProvider>
  );
};

export default Stripe;
