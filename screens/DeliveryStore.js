import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GreenButton from '../Components/GreenButton';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Button, Dialog } from '@rneui/themed';
import { useAppContext } from '../context/appContext';

const DeliveryStore = ({ navigation }) => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(1);
  const { user } = useAppContext();

  const init = async () => {
    console.log('store');
    const data = [];
    setIsLoading(true);
    const docRef = await getDocs(
      collection(db, 'retailers', user.uid, 'shops')
    );
    docRef.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setIsLoading(false);
    setStores(data);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      init();
    });

    return unsubscribe;
  }, [navigation]);

  const onSelect = async (id) => {
    setIsLoading(true);
    stores.forEach(async (store) => {
      await updateDoc(doc(db, 'retailers', user.uid, 'shops', store.id), {
        selected: false,
      });
    });
    await updateDoc(doc(db, 'retailers', user.uid, 'shops', id), {
      selected: true,
    });
    init();
  };

  return (
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
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.TopView}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {!item.selected && (
                <Ionicons
                  onPress={() => onSelect(item.id)}
                  name='radio-button-off'
                  size={25}
                  color='#2A8B00'
                  style={{ alignSelf: 'center' }}
                />
              )}
              {item.selected && (
                <Ionicons
                  name='radio-button-on'
                  size={25}
                  color='#2A8B00'
                  style={{ alignSelf: 'center' }}
                />
              )}
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontWeight: '700', marginBottom: 5 }}>
                  {item.shopName}
                </Text>
                <Text style={{ color: 'gray', marginBottom: 3 }}>
                  {item.mobileNumber}
                </Text>
                <Text style={{ width: 260, color: 'gray', marginBottom: 3 }}>
                  {item.address}
                </Text>
                <Text style={{ width: 260, color: 'gray', marginBottom: 3 }}>
                  {item.province}
                </Text>
                <Text style={{ width: 260, color: 'gray', marginBottom: 3 }}>
                  {item.city}
                </Text>
                <Text
                  style={{ color: '#2A8B00', marginTop: 5 }}
                  onPress={() =>
                    navigation.navigate('AddNewShop', {
                      item: item,
                    })
                  }
                >
                  Edit
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <GreenButton
          title={'Add new'}
          onClick={() => navigation.navigate('AddNewShop')}
        />
      </View>

      {/* 2nd shop */}
    </SafeAreaView>
  );
};

export default DeliveryStore;

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
    marginTop: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
});
