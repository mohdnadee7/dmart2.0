import { Link, useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import TopHeader from "@/components/TopHeader";
import Kitchen from "@/components/grocery/Kitchen";

export default function Categories() {
  const router = useRouter();

  const onContinue = () => {
    router.navigate("/login");
  };
  return (
    <>
    <TopHeader/>
    
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={{ color: "#fff", fontSize: 20, fontStyle: "italic" }}>
          <Link href="/(home)/">
            <AntDesign name="arrowleft" size={22} color={"#fff"} /> Grocery
          </Link>
        </Text>

        <MaterialCommunityIcons
          size={22}
          color={"#fff"}
          name="shopping-outline"
        />
      </View>

      <ScrollView>
        <View style={styles.headerTextOuter}>
          <Text style={styles.headerText}>Shop by Category </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g3.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Simla Mirch</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g4.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Onion</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g5.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Tamator</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g6.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Fruits</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>
</View>
<View
            style={{
              backgroundColor: "#018786",
              padding: 8,
              marginVertical: 5,
              width: "100%",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}
          >
            <Text style={{ color: "#fff" }}>
              Kitchen product
            </Text>
            <Link href="/details">
            <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
            </Link>
          </View>
<View style={styles.container}>
          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g3.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Simla Mirch</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g4.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Onion</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g5.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Tamator</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g6.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Fruits</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>
</View>
<View
            style={{
              backgroundColor: "#018786",
              padding: 8,
              marginVertical: 5,
              width: "100%",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}
          >
            <Text style={{ color: "#fff" }}>
              Dry product
            </Text>
            <Link href="/details">
            <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
            </Link>
          </View>
<View style={styles.container}>
          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g3.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Simla Mirch</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g4.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Onion</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g5.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Tamator</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g6.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Fruits</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>
</View>
<View
            style={{
              backgroundColor: "#018786",
              padding: 8,
              marginVertical: 5,
              width: "100%",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}
          >
            <Text style={{ color: "#fff" }}>
              Clening product
            </Text>
            <Link href="/details">
            <MaterialIcons name="keyboard-arrow-right" color={"#fff"} size={20} />
            </Link>
          </View>
<View style={styles.container}>
          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g3.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Simla Mirch</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g4.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Onion</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g5.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Tamator</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g6.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Fruits</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Masala</Text>
          </View>

          <View style={styles.gridItemOuter}>
            <View style={styles.gridItem}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.gridItemImg}
              />
            </View>
            <Text style={styles.itemTitle}>Khurmani</Text>
          </View>
        </View>

        <View style={styles.headerTextOuter}>
          <Text style={styles.headerText}>Special store for you </Text>
        </View>

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
        <Kitchen/>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#018786",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor:"#000",
    borderWidth:0.7
  },
  safeArea: {
    flex: 1,
  },
  headerTextOuter: {
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
  wrapper: {
    height: 200,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#018786",
    padding: 15,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
});
