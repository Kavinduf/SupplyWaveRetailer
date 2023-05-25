import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { Button, Card, Image } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { color } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useAppContext } from '../context/appContext';

const ShoppingCartItem = ({
  title,
  pieces,
  brand,
  brandId,
  price,
  qty,
  id,
  index,
  image,
}) => {
  const [quantity, setQuantity] = useState(qty);
  const { updateCart, removeFromCart } = useAppContext();
  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCart(
        { title, pieces, brand, price, id, index, image, brandId },
        quantity - 1
      );
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
    updateCart(
      { title, pieces, brand, price, id, index, image, brandId },
      quantity + 1
    );
  };

  return (
    <View style={styles.container}>
      {/* Top display block start */}

      <View
        style={{
          flexDirection: 'row',
          // alignItems: "center",
          // gap: 5,
          marginTop: 10,
          justifyContent: 'space-between',
        }}
      >
        <View style={{}}>
          {!image && (
            <Image
              source={require('../assets/login-png.png')}
              style={{
                width: 80,
                height: 80,
              }}
            />
          )}
          {image && (
            <Image
              source={{
                uri: image,
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 15,
              }}
            />
          )}
        </View>

        {/* title start */}

        <View style={{ paddingStart: 5, marginBottom: 5 }}>
          <Text style={styles.textTitle}>{title}</Text>

          {/* title end */}
          {/* Description start */}

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textDescriptionLeft}>Pieces :</Text>
            <Text style={styles.textDescriptionRight}>{pieces}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textDescriptionLeft}>Brand :</Text>
            <Text style={styles.textDescriptionRight}>{brand}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textDescriptionLeft}>Unit price :</Text>
            <Text style={styles.textDescriptionRight}>{price}</Text>
          </View>

          {/* Description end*/}
        </View>
        <View style={{ marginTop: 10 }}>
          <AntDesign
            name='delete'
            size={19}
            color={'black'}
            onPress={() => removeFromCart(index)}
          />
        </View>
      </View>

      {/* Top display block end */}
      {/* Bottom display block start */}

      <View style={{ flexDirection: 'row', marginTop: 2 }}>
        <View style={styles.viewQuantity}>
          <AntDesign
            name='minuscircleo'
            size={20}
            color={'black'}
            onPress={onMinus}
          />
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign
            name='pluscircleo'
            size={20}
            color={'black'}
            onPress={onPlus}
          />
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <Text style={styles.textPrice}>
            LKR {(price * quantity).toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Bottom display block end */}
    </View>
  );
};

export default memo(ShoppingCartItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 2,
    paddingBottom: 10,
    paddingStart: 10,
    paddingEnd: 10,
  },
  viewImage: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textTitle: {
    fontWeight: '600',
    paddingTop: 10,
    fontSize: 15,
    width: 250,
    marginStart: 3,
  },
  textDescriptionLeft: {
    fontWeight: '400',
    paddingStart: 4,
    fontSize: 13,
  },
  textDescriptionRight: {
    fontWeight: '500',
    color: 'gray',
    paddingStart: 5,
    fontSize: 13,
  },
  quantity: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 15,
    backgroundColor: '#EEE',
  },
  viewQuantity: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderRadius: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 85,
    marginRight: 'auto',
  },
  textPrice: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 'auto',
  },
});
