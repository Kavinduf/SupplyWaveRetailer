import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const OrderCard = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.TopView}
      onPress={() =>
        navigation.navigate('OrderDetails', {
          order: item,
        })
      }
    >
      {/* Pickup start */}

      {/* {Time and date start} */}

      <View style={styles.TopSubView}>
        <View style={styles.bottomRow}>
          <Feather
            name='clock'
            size={20}
            color='#5b5b5b'
            style={{ marginStart: 5 }}
          />
          <Text style={styles.bottomTextRight}>
            {moment(Object.values(item.createdAt)[0] * 1000).format(
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
          <Text style={styles.bottomTextRight}>{item.id}</Text>
        </View>
        {/* Package id end */}
        <View style={styles.line}></View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Ionicons name='location-sharp' size={24} color='#2A8B00' />

          <View style={styles.pickupView}>
            <Text style={{ fontWeight: '500' }}>Delivery Location</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 30 }}></View>

          <View style={{ width: 330 }}>
            <Text style={{ fontWeight: '600' }}>
              {item.deliverStore.shopName}
            </Text>
            <Text>{item.deliverStore.address}</Text>
          </View>
        </View>
        {/* <View style={styles.line}></View> */}
      </View>

      {/* pickup end */}

      <View style={styles.bottomView}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomTextLeft}>Total: </Text>
          <Text style={styles.bottomTextRight}>LKR {item.total}</Text>
        </View>
        <Text style={styles.bottomTextStatus}>
          {item.status[0].toUpperCase() + item.status.slice(1)}
        </Text>
      </View>
    </Pressable>
  );
};

export default OrderCard;

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
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#BDE4B8',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
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
  button: {
    paddingHorizontal: 15,
  },
  bottomTextStatus: {
    fontSize: 16,
    color: '#2da252',
    fontWeight: '500',
  },
});
