import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";

const OrderTracking = ({ route }) => {
  const [selectedStep, setSelectedStep] = useState();
  const { order } = route.params;

  useEffect(() => {
    if (order.status === "accepted") {
      setSelectedStep(1);
    }
    if (order.status === "toShip") {
      setSelectedStep(2);
    }
    if (order.status === "shipped") {
      setSelectedStep(3);
    }
    if (order.status === "delivered") {
      setSelectedStep(4);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <Text
            style={{ fontSize: 17, fontWeight: "500", alignSelf: "flex-end" }}
          >
            Estimated delivery by
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "700",
              alignContent: "flex-end",
              marginLeft: 10,
              color: "#2A8B00",
            }}
          >
            {moment(order.createdAt.seconds * 1000)
              .add(5, "days")
              .format("MMM DD")}
          </Text>
        </View>
        <View style={styles.statusBarView}>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
              backgroundColor: selectedStep > 0 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>
          <View
            style={{
              height: 6,
              width: 80,
              backgroundColor: selectedStep > 1 ? "#2A8B00" : "#f2f2f2",
            }}
          ></View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
              backgroundColor: selectedStep > 1 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>
          <View
            style={{
              height: 6,
              width: 80,
              backgroundColor: selectedStep > 2 ? "#2A8B00" : "#f2f2f2",
            }}
          ></View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
              backgroundColor: selectedStep > 2 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>
          <View
            style={{
              height: 6,
              width: 80,
              backgroundColor: selectedStep > 3 ? "#2A8B00" : "#f2f2f2",
            }}
          ></View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
              backgroundColor: selectedStep > 3 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 2,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ width: 93, fontSize: 12, fontWeight: "600" }}>
              Order
            </Text>
            <Text style={{ width: 93, fontSize: 12, fontWeight: "600" }}>
              accepted
            </Text>
          </View>
          <Text style={{ width: 93, fontSize: 12, fontWeight: "600" }}>
            Ready for dispatch
          </Text>
          <Text style={{ width: 93, fontSize: 12, fontWeight: "600" }}>
            Dispatched
          </Text>
          <Text style={{ width: 93, fontSize: 12, fontWeight: "600" }}>
            Delivered
          </Text>
        </View>
      </View>
      <View style={styles.BottomView}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#2A8B00" />
          <Text style={{ marginStart: 10 }}>{order.deliverStore.address}</Text>
        </View>

        {/* Bottom delivery discription start*/}

        {/* {1 start} */}

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          {/* {circle start} */}
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
              backgroundColor: selectedStep > 3 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>

          {/* circle end */}

          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ marginStart: 10 }}>
              Delivered to the destination
            </Text>
            {order.deliveredAt && (
              <View style={{ flexDirection: "row", marginStart: 10 }}>
                <Text style={{ color: "gray" }}>
                  {moment(order.deliveredAt.seconds * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* 1 end */}

        {/* {2 start} */}

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          {/* {circle start} */}
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
              backgroundColor: selectedStep > 2 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>

          {/* circle end */}

          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ marginStart: 10 }}>Order dispatched</Text>
            {order.shippedAt && (
              <View style={{ flexDirection: "row", marginStart: 10 }}>
                <Text style={{ color: "gray" }}>
                  {moment(order.shippedAt.seconds * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* 2 end */}

        {/* {3 start} */}

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          {/* {circle start} */}
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
              backgroundColor: selectedStep > 1 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>

          {/* circle end */}

          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ marginStart: 10 }}>Order is ready for dispatch</Text>
            {order.toShipAt && (
              <View style={{ flexDirection: "row", marginStart: 10 }}>
                <Text style={{ color: "gray" }}>
                  {moment(order.toShipAt.seconds * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* 3 end */}

        {/* {4 start} */}

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          {/* {circle start} */}
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
              backgroundColor: selectedStep > 0 ? "#2A8B00" : "#f2f2f2",
              //   borderColor: "#2A8B00",
              //   borderWidth: 5,
            }}
          ></View>

          {/* circle end */}

          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ marginStart: 10 }}>Order accepted</Text>
            {order.acceptedAt && (
              <View style={{ flexDirection: "row", marginStart: 10 }}>
                <Text style={{ color: "gray" }}>
                  {moment(order.acceptedAt.seconds * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )}{" "}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* 4 end */}
      </View>
      {/* Bottom delivery discription end*/}

      {/* change the following button in order to change the bar */}
      {/* <Pressable
        style={{ height: 50, width: 50, backgroundColor: 'black' }}
        onPress={() => {
          setSelectedStep(selectedStep + 1);
        }}
      ></Pressable> */}
    </SafeAreaView>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: "#F5F5F5",
  },
  TopView: {
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    paddingBottom: 20,
  },
  BottomView: {
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 15,
    backgroundColor: "#FFF",
    borderColor: "#2A8B00",
    borderWidth: 5,
  },
  bar: {
    height: 6,
    width: 80,
    backgroundColor: "#2A8B00",
  },
  statusBarView: {
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    marginTop: 30,
    justifyContent: "center",
  },
});
