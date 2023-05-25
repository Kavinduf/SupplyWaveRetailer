import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import React from 'react';
import { Button, Icon } from '@rneui/themed';
import ItemDescription from '../Components/ItemDescription';
import { AntDesign } from '@expo/vector-icons';
import { useAppContext } from '../context/appContext';

const ItemDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useAppContext();

  const pressCall = () => {
    const url = 'tel://' + item.manufacturer.mobileNumber;
    Linking.openURL(url);
  };

  const [quantity, setQuantity] = useState(1);
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.viewImage}>
          {!item.image && (
            <Image
              source={require('../assets/login-png.png')}
              style={styles.image}
            />
          )}
          {item.image && (
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textTitle}>{item.productName}</Text>
          <Text style={styles.textPrice}>LKR {item.pricePerUnit}</Text>
          <Pressable
            style={{
              gap: 5,
              flexDirection: 'row',
              marginTop: 5,
            }}
            onPress={pressCall}
          >
            <Icon type='feather' name='phone-call' size={18} />
            <Text>{item.manufacturer.mobileNumber}</Text>
          </Pressable>

          {/* The single item weight which is "100g" and pieces in a pack which is "12" in this case must be taken seprately when inserting items by manufacturer so that the single item weight and pieaces count can be displayed beside the item name */}
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textSubtitle}>Description</Text>
          <ItemDescription
            titleLeft={'Pieces in a Package'}
            titleRight={item.piecesInUnit + ' pc'}
          />
          <ItemDescription
            titleLeft={'Brand'}
            titleRight={item.manufacturer.shopName}
          />
          <ItemDescription
            titleLeft={'Weight Per Item'}
            titleRight={item.weight + 'kg '}
          />
          {/* <ItemDescription titleLeft={'Dimentions'} titleRight={'21x16cm'} /> */}
        </View>

        <View style={styles.separator}>
          <View style={styles.row}>
            <AntDesign
              name='minuscircleo'
              size={35}
              color={'black'}
              onPress={onMinus}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <AntDesign
              name='pluscircleo'
              size={35}
              color={'black'}
              onPress={onPlus}
            />
          </View>
        </View>
        <Pressable
          style={styles.viewButton}
          onPress={() => {
            addToCart(
              {
                title: item.productName,
                pieces: item.piecesInUnit,
                brand: item.manufacturer.shopName,
                brandId: item.manufacturer.id,
                price: item.pricePerUnit,
                id: item.id,
                image: item.image,
                brandPhoneNo: item.manufacturer.mobileNumber,
              },
              quantity
            );
            navigation.goBack();
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Add {quantity} to basket &#8226; LKR{' '}
              {quantity * item.pricePerUnit}
            </Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    backgroundColor: '#EEE',
    justifyContent: 'center',
  },
  viewImage: {
    alignItems: 'center',
  },
  viewText: {
    marginTop: 5,
    backgroundColor: '#FFF',
    // marginHorizontal: 10,
    // alignItems: "flex-start",
    // borderRadius: 10,
    padding: 15,
  },
  image: {
    width: 300,
    height: 330,
    // alignSelf: "center",
  },
  textTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  textSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  textPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginTop: 5,
  },
  separator: {
    marginTop: 5,
    backgroundColor: '#FFF',
    padding: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderRadius: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  viewButton: {
    backgroundColor: '#FFF',
    paddingBottom: 50,
    // alignItems: "center",
  },
  button: {
    backgroundColor: '#BDE4B8',
    marginTop: 5,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    height: 50,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
