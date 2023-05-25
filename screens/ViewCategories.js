import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
// import { requestCameraPermissionsAsync } from "expo-image-picker";
import { db } from "../firebase";
import {
  getDocs,
  doc,
  collection,
  where,
  query,
  getDoc,
} from "firebase/firestore";

const ViewCategories = ({ route, navigation }) => {
  const [selectedType, setSelectedType] = useState(route.params.selectedType);
  const [selectedSubType, setSelectedSubType] = useState(
    route.params.selectedSubType
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    const init = async () => {
      console.log("selectedSubStype", selectedType);
      let q = null;
      if (selectedSubType.length === 0) {
        q = query(
          collection(db, "products"),
          where("category", "==", Object.keys(selectedType)[0])
        );
      } else {
        q = query(
          collection(db, "products"),
          where("category", "==", Object.keys(selectedType)[0]),
          where(
            "subCategory",
            "==",
            Object.values(selectedType)[0][selectedSubType]
          )
        );
      }
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot.docs[0].data());

      for (let i = 0; i < querySnapshot.size; i++) {
        console.log(querySnapshot.docs[i].data());
        const manufacturer = await getDoc(
          doc(db, "manufacturers", querySnapshot.docs[i].data().manufacturerId)
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
    };
    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 5 }}>
            Category:
          </Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              marginBottom: 5,
              color: "#5d5b6a",
              marginStart: 5,
              width: 230,
            }}
          >
            {Object.keys(selectedType)[0]}
          </Text>
        </View>
        {selectedSubType >= 0 && selectedSubType.length !== 0 && (
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              Sub Category:
            </Text>
            <Text
              style={{
                fontWeight: "500",
                marginStart: 3,
                color: "#5d5b6a",
                fontSize: 16,
                width: 230,
              }}
            >
              {Object.values(selectedType)[0][selectedSubType]}
            </Text>
          </View>
        )}
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ItemCard {...item} navigation={navigation} />
        )}
      />
      {/* <ScrollView>
        <View style={{ marginTop: 25 }}>
          <ItemCard
            title={'Cream Crackers'}
            pricePerUnit={4500.0}
            brand={'Maliban'}
            image={null}
            piecesInUnit={12}
          />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default ViewCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  TopView: {
    backgroundColor: "#BDE4B8",
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 1,
    marginTop: 10,
    padding: 10,
    marginBottom: 15,
  },
});
