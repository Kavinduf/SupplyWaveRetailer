import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { Image } from '@rneui/themed';

const BrandCard = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.TopView}
      onPress={() =>
        navigation.navigate('BrandDetails', {
          brand: { ...item, title: item.shopName },
        })
      }
    >
      <View style={{ alignItems: 'center' }}>
        {/* {image && ( */}
        {!item.image && (
          <Image
            style={{ width: 70, height: 70, borderRadius: 10 }}
            source={require('../assets/login-png.png')}
          />
        )}
        {item.image && (
          <Image
            style={{ width: 70, height: 70, borderRadius: 10 }}
            source={{
              uri: item.image,
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

export default memo(BrandCard);

const styles = StyleSheet.create({
  TopView: {
    width: 80,
    height: 80,
    padding: 5,
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
    marginEnd: 15,
  },
});
