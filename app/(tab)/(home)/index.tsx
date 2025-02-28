import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ImageBackground
} from "react-native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import TopHeader from "@/components/TopHeader";
import React, { useCallback, useState } from "react";
import Swiper from "react-native-swiper";
import Kitchen from "@/components/grocery/Kitchen";
import { Link, useRouter } from "expo-router";
import GeoLocation from "@/components/location/geolocation";
import DealsOfTheDay from "@/components/grocery/DealsOfTheDay";
import { useFocusEffect } from '@react-navigation/native';
import { API_URL } from '../../../env';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const router = useRouter();
  const handleSearch = (text) => {
    router.navigate("/search");
    setSearchQuery(text);
  };
  const ViewRelatedProduct = (categoryId: any) => {
    console.log("ok");
    router.navigate("/details");
  }

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL + 'subCategory');
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          console.log("error", err);
          // setError(err.message);
        } finally {
          //setLoading(false);
        }
      };

      fetchData();
    }, [])
  );

  return (
    <>
      <TopHeader />

      <SafeAreaView style={styles.safeArea}>
        <View style={{ backgroundColor: "#018786" }}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for 'vegitable'"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <Fontisto name="search" size={20} color="#aaa" style={styles.icon} />
          </View>
        </View>
        <ScrollView>
          <GeoLocation />
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}
            loop={true}
          >
            <View style={styles.slide}>
              <Image
                source={require("@/assets/images/b1.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("@/assets/images/b2.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("@/assets/images/b3.jpg")}
                style={styles.image}
              />
            </View>
          </Swiper>
          {data ? (
            <>
              <View style={styles.itemHeader}>
                <Text style={{ color: "#fff" }}>
                  View all product
                </Text>
                <Link href="/details">
                  <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
                </Link>
              </View>
              <View style={styles.container}>
                {data && data.map((item, index) => (
                  <View style={styles.gridItemOuter} key={index} onTouchEnd={() => ViewRelatedProduct(item.CategoryId)} >
                    <View style={styles.gridItem}>
                      <Image
                        source={{ uri: `${item.ImageUrl}` }}
                        style={styles.gridItemImg}
                      />
                    </View>
                    <Text style={styles.itemTitle}>{item.SubCategory}</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (<Text></Text>)}
<Kitchen />
          {data ? (
            <>
              <View style={styles.itemHeader}>
                <Text style={{ color: "#fff" }}>
                  View all product
                </Text>
                <Link href="/details">
                  <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
                </Link>
              </View>
              <ImageBackground
                source={require("@/assets/images/appg.png")}
                style={styles.background}
              >
                <View style={styles.container}>
                  {data && data.map((item, index) => (
                    <View style={styles.gridItemOuter} key={index} onTouchEnd={() => ViewRelatedProduct(item.CategoryId)} >
                      <View style={styles.gridItem}>
                        <Image
                          source={{ uri: `${item.ImageUrl}` }}
                          style={styles.gridItemImg}
                        />
                      </View>
                      <Text style={styles.itemTitle}>{item.SubCategory}</Text>
                    </View>
                  ))}
                </View>
              </ImageBackground>
            </>
          ) : (<Text></Text>)}
          <DealsOfTheDay />

          {data ? (
            <>
              <View style={styles.itemHeader}>
                <Text style={{ color: "#fff", fontWeight: 600 }}>
                  Grocery & kitchen
                </Text>
                <Link href="/details">
                  <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
                </Link>
              </View>

              <ImageBackground
                source={require("@/assets/images/appg.png")}
                style={styles.background}
              >
                <View style={styles.container}>
                  {data && data.map((item, index) => (
                    <View style={styles.gridItemOuter} key={index} onTouchEnd={() => ViewRelatedProduct(item.CategoryId)} >
                      <View style={styles.gridItem}>
                        <Image
                          source={{ uri: `${item.ImageUrl}` }}
                          style={styles.gridItemImg}
                        />
                      </View>
                      <Text style={styles.itemTitle}>{item.SubCategory}</Text>
                    </View>
                  ))}
                </View>
              </ImageBackground>
            </>
          ) : (<Text></Text>)}
          <Kitchen />

          {data ? (
            <>
              <View style={styles.itemHeader}>
                <Text style={{ color: "#fff" }}>
                  View all product
                </Text>
                <Link href="/details">
                  <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
                </Link>
              </View>
              <View style={styles.container}>
                {data && data.map((item, index) => (
                  <View style={styles.gridItemOuter} key={index} onTouchEnd={() => ViewRelatedProduct(item.CategoryId)} >
                    <View style={styles.gridItem}>
                      <Image
                        source={{ uri: `${item.ImageUrl}` }}
                        style={styles.gridItemImg}
                      />
                    </View>
                    <Text style={styles.itemTitle}>{item.SubCategory}</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (<Text></Text>)}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerTextOuter: {
    backgroundColor: "#0f0f0f",
    padding: 7,
    textAlign: "center",
    color: "orange",
  },
  headerText: {
    textAlign: "center",
    color: "orange",
    fontWeight: "bold",
    fontSize: 15,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  gridItemOuter: {
    width: "23%",
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  gridItem: {
    backgroundColor: "#ddd",
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  gridItemImg: {
    width: "100%",
    height: "100%",
  },
  itemTitle: {
    fontSize: 12,
    textAlign: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  background: {
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  itemHeader: {
    backgroundColor: "#018786",
    padding: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
export default Index;
