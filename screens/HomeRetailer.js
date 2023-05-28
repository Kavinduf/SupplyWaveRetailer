import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import { color, Icon, SearchBar, Button, Card, Image } from '@rneui/base';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React, { useState, TouchableOpacity, useEffect } from 'react';
import ItemCard from '../Components/ItemCard';
import { db } from '../firebase';
import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
  orderBy,
  startAt,
  endAt,
} from 'firebase/firestore';
import { useAppContext } from '../context/appContext';
import { Dialog, Input } from '@rneui/themed';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import BrandCard from '../Components/BrandCard';

//

const HomeRetailer = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const [brands, setBrands] = useState([]);

  const { addToCart } = useAppContext();

  const onSearch = async () => {
    setIsLoading(true);
    const q = query(
      collection(db, 'products'),
      where('status', '==', 'active'),
      orderBy('productName'),
      startAt(search),
      endAt(search + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    setProducts([]);
    for (let i = 0; i < querySnapshot.size; i++) {
      const manufacturer = await getDoc(
        doc(db, 'manufacturers', querySnapshot.docs[i].data().manufacturerId)
      );
      setProducts((prev) => [
        ...prev,
        {
          ...querySnapshot.docs[i].data(),
          id: querySnapshot.docs[i].id,
          manufacturer: { ...manufacturer.data(), id: manufacturer.id },
        },
      ]);
    }
    setIsLoading(false);
  };

  const init = async () => {
    setProducts([]);
    setBrands([]);
    setIsLoading(true);
    const q = query(
      collection(db, 'products'),
      where('status', '==', 'active')
    );
    const querySnapshot = await getDocs(q);
    for (let i = 0; i < querySnapshot.size; i++) {
      const manufacturer = await getDoc(
        doc(db, 'manufacturers', querySnapshot.docs[i].data().manufacturerId)
      );
      setProducts((prev) => [
        ...prev,
        {
          ...querySnapshot.docs[i].data(),
          id: querySnapshot.docs[i].id,
          manufacturer: { ...manufacturer.data(), id: manufacturer.id },
        },
      ]);
    }

    const brands = await getDocs(collection(db, 'manufacturers'));
    for (let i = 0; i < brands.size; i++) {
      setBrands((prev) => [
        ...prev,
        {
          ...brands.docs[i].data(),
          id: brands.docs[i].id,
        },
      ]);
    }

    const categories = await getDocs(collection(db, 'categories'));
    for (let i = 0; i < categories.size; i++) {
      //laundry:[1,2,3,4] = categories.docs[i].data()

      //snacks:[1,2,3,4]
      const data = Object.keys(categories.docs[i].data());

      //data=[snacks]

      data;
      //categories:[laundry]
      setCategories((prev) => [...prev, data[0]]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const onCartIconClicked = (product) => {
    setSelectedProduct(product);
    setDialogVisible(true);
  };

  const onAddToCart = () => {
    addToCart(selectedProduct, qty);
    setDialogVisible(false);
    setQty(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dialog box start */}

      <Dialog
        isVisible={isLoading}
        overlayStyle={{
          width: 90,
          height: 90,
        }}
      >
        <Dialog.Loading />
      </Dialog>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <Dialog
          isVisible={dialogVisible}
          onBackdropPress={() => setDialogVisible(false)}
        >
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {selectedProduct?.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                textAlign: 'center',
              }}
            >
              {selectedProduct?.brand}
            </Text>
            <Image
              source={{
                uri: selectedProduct?.image,
              }}
              style={{
                width: 100,
                height: 100,
                marginTop: 10,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
                gap: 4,
                backgroundColor: '#EEEEEE',
                marginVertical: 15,
                borderRadius: 40,
                padding: 5,
                paddingVertical: 0,
                height: 35,
              }}
            >
              <Ionicons
                name='remove-circle-outline'
                size={30}
                onPress={() => {
                  if (qty === '') {
                    setQty(1);
                    return;
                  }
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
              />

              <TextInput
                placeholder='Qty'
                value={qty.toString()}
                onChangeText={(text) => setQty(text)}
                keyboardType='number-pad'
                input
                style={{
                  width: 40,
                  marginVertical: 10,
                  marginHorizontal: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              />
              <Ionicons
                name='add-circle-outline'
                size={30}
                onPress={() => {
                  if (qty === '') {
                    setQty(1);
                    return;
                  }

                  setQty(qty + 1);
                }}
              />
            </View>

            <Button
              // type="outline"
              title={'Add to Cart'}
              radius={7}
              raised
              onPress={onAddToCart}
              titleStyle={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 17,
              }}
              buttonStyle={{
                // borderColor: "green",
                backgroundColor: '#BDE4B8',
                width: 200,
              }}
            />
          </View>
        </Dialog>

        {/* Dialog box end */}
      </View>

      {/* SearchBAr Start */}
      <SearchBar
        lightTheme='true'
        round='true'
        value={search}
        onChangeText={setSearch}
        placeholder='Browse our products'
        selectionColor='#2A8B00'
        // leftIconContainerStyle={{ backgroundColor: "#FFFFFF" }}
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInput}
        inputContainerStyle={styles.searchInputContainer}
        returnKeyType='search'
        style={{ backgroundColor: '#FFF' }}
        searchIcon={{ color: '#2A8B00', size: 25 }}
        onSubmitEditing={onSearch}
        rightIcon={{}}
      ></SearchBar>

      {/* Searchbar End */}
      {/* catergoris start */}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,
          marginBottom: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categories}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Text
              style={styles.catergories}
              onPress={() =>
                navigation.navigate('ViewCategories', {
                  selectedType: { [item]: [] },
                  selectedSubType: [],
                })
              }
            >
              {item}
            </Text>
          )}
        />

        <View></View>
      </View>

      {/* catergories end */}

      {/* Brand slider starts */}

      <View
        style={{
          flexDirection: 'row',
          marginStart: 15,
          marginVertical: 10,
        }}
      >
        <Pressable style={styles.TopViewBrands}>
          <Text style={{ fontWeight: '600', fontSize: 18, color: '#2A8B00' }}>
            Brands
          </Text>
        </Pressable>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            // marginHorizontal: 15,
            // alignItems: 'center',
            marginBottom: 0,
            paddingBottom: 0,
            maxHeight: 100,
            // height: 100,
            overflow: 'hidden',
          }}
          data={brands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BrandCard item={item} navigation={navigation} />
          )}
        />
      </View>

      {/* Brand slider ends */}

      <View style={{ marginHorizontal: 15, marginBottom: 20, marginTop: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>All Products</Text>
      </View>
      {/* Item Cards Start */}

      <View>
        <FlatList
          onRefresh={init}
          refreshing={isLoading}
          data={products}
          ListFooterComponent={() => (
            <View style={{ marginBottom: 130 }}></View>
          )}
          ListFooterComponentStyle={{ marginBottom: 140 }}
          renderItem={({ item }) => (
            <ItemCard
              {...item}
              onCartIconClicked={onCartIconClicked}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Item cards End */}
    </SafeAreaView>
  );
};

export default HomeRetailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // marginHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  cardWrapperContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  cardContainer: {
    width: '50%',
    marginHorizontal: 0,
  },
  searchContainer: {
    padding: 0,
    borderRadius: 10,
    marginTop: 0,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    // color: "#FFFFFF",
  },
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
  TopViewBrands: {
    width: 80,
    height: 80,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#2A8B00',
    borderWidth: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  catergories: {
    fontWeight: '600',
    marginStart: 10,
    // backgroundColor: "#BDE4B8",
    borderColor: '#2A8B00',
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
  },
  searchInput: { backgroundColor: '#FFF', borderRadius: 10, padding: 0 },
  searchInputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingStart: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
  },
});
