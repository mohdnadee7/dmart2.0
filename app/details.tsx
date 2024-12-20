import { Link, useRouter,useLocalSearchParams  } from "expo-router";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import TopHeader from "@/components/TopHeader";
import CartHeader from "@/components/grocery/CartHeader";

export default function Details() {
  const router = useRouter();
  const { description } = useLocalSearchParams (); 
  const onContinue = () => {
    router.navigate("/login");
  };
  return (
    <>
    <TopHeader/>
    <SafeAreaView style={styles.safeArea}>
    <CartHeader/>
      <ScrollView>
        <View style={styles.headerTextOuter}>
          <Text style={styles.headerText}> { description } </Text>
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
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
