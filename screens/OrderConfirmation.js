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
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import OrderConfirmationBrandCard from '../Components/OrderConfirmationBrandCard';
import GreenButton from '../Components/GreenButton';
import { db } from '../firebase';
import { getDocs, doc, where, query, collection } from 'firebase/firestore';
import { useAppContext } from '../context/appContext';
import { Dialog } from '@rneui/themed';
import Stripe from '../Components/Stripe';

const OrderConfirmation = ({ navigation }) => {
  const { user } = useAppContext();
  const [shop, setShop] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart } = useAppContext();
  const [newCart, setNewCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const init = async () => {
    setIsLoading(true);
    const q = query(
      collection(db, 'retailers', user.uid, 'shops'),
      where('selected', '==', true)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setShop({ ...doc.data(), id: doc.id });
    });
    console.log(cart);
    setIsLoading(false);
  };

  useEffect(() => {
    //sort items by shop name
    const newCart = cart.reduce((acc, item) => {
      const found = acc.find((i) => i.brand === item.brand);
      if (!found) {
        acc.push({
          brandId: item.brandId,
          brand: item.brand,
          brandPhoneNo: item.brandPhoneNo,
          items: [item],
        });
      } else {
        found.items.push(item);
      }
      return acc;
    }, []);
    setNewCart(newCart);
  }, [cart]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      init();
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Dialog
          isVisible={isLoading}
          overlayStyle={{
            width: 90,
            height: 90,
          }}
        >
          <Dialog.Loading />
        </Dialog>
        {!isLoading && shop && (
          <Pressable
            style={styles.TopView}
            onPress={() => navigation.navigate('DeliveryStore')}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <FontAwesome5 name='map-marker-alt' size={19} color='#2A8B00' />
              <View style={{ justifyContent: 'center' }}>
                <Text
                  style={{ fontSize: 15, fontWeight: '700', marginBottom: 5 }}
                >
                  Delivery store
                </Text>
                <Text style={{ fontWeight: '400', marginBottom: 5 }}>
                  {shop?.shopName}
                </Text>
                <Text style={{ color: 'gray', marginBottom: 3 }}>
                  {shop.mobileNumber}
                </Text>
                <Text style={{ width: 250, color: 'gray', marginBottom: 3 }}>
                  {shop.address}
                </Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <MaterialIcons
                  name='keyboard-arrow-right'
                  size={24}
                  color='black'
                />
              </View>
            </View>
          </Pressable>
        )}

        <FlatList
          data={newCart}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <OrderConfirmationBrandCard {...item} />}
        />
      </SafeAreaView>
      <View style={styles.bottomView}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>
            LKR{' '}
            {cart.reduce((acc, item) => {
              return acc + item.price * item.qty;
            }, 0)}
          </Text>
        </View>

        {shop && (
          <Stripe
            order={newCart}
            navigation={navigation}
            deliverStore={{
              ...shop,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default OrderConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 15,
    backgroundColor: '#F5F5F5',
  },
  TopView: {
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  bottomView: {
    paddingBottom: 30,
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
  total: { fontSize: 15, fontWeight: '700' },
  button: {
    marginTop: 20,
  },
});
