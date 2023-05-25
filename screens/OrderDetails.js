import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
// import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import OrderDetailsItemCard from '../Components/OrderDetailsItemCard';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

const OrderDetails = ({ navigation, route }) => {
  const { order } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.TopView}>
          {/* Pickup start */}

          {/* {Time and date start} */}

          <View style={styles.TopSubView}>
            <View style={styles.bottomRow}>
              <Feather
                name='clock'
                size={20}
                color='#5b5b5b'
                style={{ marginStart: 3 }}
              />
              <Text style={styles.bottomTextRight}>
                {moment(Object.values(order.createdAt)[0] * 1000).format(
                  'DD/MM/YYYY (hh:mm A)'
                )}
              </Text>
            </View>
            {/* {Time and date end} */}
            {/* Package id start */}
            <View style={styles.bottomRow}>
              <FontAwesome5
                name='hashtag'
                size={18}
                color='#5b5b5b'
                style={{ marginStart: 5 }}
              />
              <Text style={styles.bottomTextRight}>{order.id}</Text>
            </View>
            {/* Package id end */}
            <View style={styles.line}></View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Ionicons name='location-sharp' size={24} color='#2A8B00' />

              <View style={styles.pickupView}>
                <Text style={{ fontWeight: '500' }}>Delivery Location</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ width: 30 }}></View>

              <View style={{ width: 330 }}>
                <Text style={{ fontWeight: '600' }}>
                  {order.deliverStore.shopName}
                </Text>
                <Text>{order.deliverStore.address}</Text>
                <Text>{order.deliverStore.mobileNumber}</Text>
              </View>
            </View>
            {/* <View style={styles.line}></View> */}
          </View>

          {/* pickup end */}
        </View>
        {/* Order tracking start */}
        <Pressable
          style={styles.OrderTracking}
          onPress={() =>
            navigation.navigate('OrderTracking', {
              order: order,
            })
          }
        >
          <Text style={styles.headingOrder}> Track Order</Text>
          <AntDesign name='right' size={20} color='black' />
        </Pressable>
        {/* Order tracking end */}
        {/* Order items start */}

        <View style={styles.bottomView}>
          <Text style={styles.headingOrder}>Order items</Text>

          <View style={styles.line}></View>
          <FlatList
            keyExtractor={(item, index) => index}
            data={order.items}
            renderItem={({ item }) => <OrderDetailsItemCard item={item} />}
          />

          <View style={styles.viewTotal}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>LKR {order.total}</Text>
          </View>
        </View>

        {/* Order items end */}
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  TopView: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    marginTop: 10,
  },
  OrderTracking: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TopSubView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 10,
  },
  TopSecondView: {
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  pickupView: {
    backgroundColor: '#BDE4B8',
    padding: 4,
    borderRadius: 5,
    marginStart: 5,
    marginBottom: 5,
  },
  DropView: {
    backgroundColor: '#FFD984',
    padding: 4,
    borderRadius: 5,
    marginStart: 8,
    marginBottom: 5,
  },
  orderId: {
    backgroundColor: '#FFD984',
    padding: 4,
    borderRadius: 5,
    marginStart: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#eeeeee',
    height: 2,
    marginTop: 5,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 5,
  },
  bottomTextRight: {
    fontSize: 16,
    marginStart: 7,
    fontWeight: '600',
  },
  bottomTextLeft: {
    fontSize: 16,
    color: '#5b5b5b',
    fontWeight: '500',
    marginStart: 3,
  },

  bottomView: {
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  headingOrder: {
    fontWeight: '700',
    fontSize: 17,
    // color: "#999999",
  },
  total: {
    fontWeight: '700',
    fontSize: 16,
    // color: "#999999",
  },
  viewTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});
