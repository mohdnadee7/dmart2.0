import { Link, useRouter, useLocalSearchParams } from "expo-router";
import {Image,  StyleSheet,  ScrollView,  Text,  View,  SafeAreaView,  TouchableOpacity} from "react-native";
import Swiper from "react-native-swiper";
import TopHeader from "@/components/TopHeader";
import CartHeader from "@/components/grocery/CartHeader";

export default function Details() {
  const router = useRouter();
  const { description } = useLocalSearchParams();
  const onContinue = () => {
    router.navigate("/login");
  };
  return (
    <>
      <TopHeader />
      <SafeAreaView style={styles.safeArea}>
        <CartHeader />
        <ScrollView>
          <View style={styles.kitchenProductOuter}>
            <View style={styles.gridItemOuters}>
              <Image
                source={require("@/assets/images/g1.png")}
                style={styles.productImage}
              />

              <Text style={styles.productTitle}>Masala Spices</Text>
              <Text style={styles.productPrice}>₹150</Text>
              <Text style={styles.productMRP}>MRP ₹200</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Product added in cart!')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                <Link href="/(tab)/(home)/details/1" style={styles.viewAllButton}>
                  <Text style={styles.buttonText}>View All</Text>
                </Link>
              </View>
            </View>

            <View style={styles.gridItemOuters}>
              <Image
                source={require("@/assets/images/g2.png")}
                style={styles.productImage}
              />

              <Text style={styles.productTitle}>Masala Spices</Text>
              <Text style={styles.productPrice}>₹150</Text>
              <Text style={styles.productMRP}>MRP ₹200</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Product added in cart!')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                <Link href="/(tab)/(home)/details/2" style={styles.viewAllButton}>
                  <Text style={styles.buttonText}>View All</Text>
                </Link>
              </View>
            </View>

            <View style={styles.gridItemOuters}>
              <Image
                source={require("@/assets/images/g3.png")}
                style={styles.productImage}
              />

              <Text style={styles.productTitle}>Simla Mirch</Text>
              <Text style={styles.productPrice}>₹20 200g</Text>
              <Text style={styles.productMRP}>MRP ₹30</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Product added in cart!')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                <Link href="/(tab)/(home)/details/3" style={styles.viewAllButton}>
                  <Text style={styles.buttonText}>View All</Text>
                </Link>
              </View>
            </View>

            <View style={styles.gridItemOuters}>
              <Image
                source={require("@/assets/images/g4.png")}
                style={styles.productImage}
              />

              <Text style={styles.productTitle}>Onion</Text>
              <Text style={styles.productPrice}>₹60 1kg</Text>
              <Text style={styles.productMRP}>MRP ₹80</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Product added in cart!')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                <Link href="/(tab)/(home)/details/4" style={styles.viewAllButton}>
                  <Text style={styles.buttonText}>View All</Text>
                </Link>
              </View>
            </View>

            <View style={styles.gridItemOuters}>
              <Image
                source={require("@/assets/images/g5.png")}
                style={styles.productImage}
              />

              <Text style={styles.productTitle}>Fresh Tomato</Text>
              <Text style={styles.productPrice}>₹80 1kg</Text>
              <Text style={styles.productMRP}>MRP ₹120</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Product added in cart!')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                <Link href="/(tab)/(home)/details/5" style={styles.viewAllButton}>
                  <Text style={styles.buttonText}>View All</Text>
                </Link>
              </View>
            </View>

            <View style={styles.gridItemOuters}>
              <Image
                source={require("@/assets/images/g6.png")}
                style={styles.productImage}
              />

              <Text style={styles.productTitle}>Fresh Fruits</Text>
              <Text style={styles.productPrice}>₹200 1kg</Text>
              <Text style={styles.productMRP}>MRP ₹2400</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Product added in cart!')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                <Link href="/(tab)/(home)/details/5" style={styles.viewAllButton}>
                  <Text style={styles.buttonText}>View All</Text>
                </Link>
              </View>
            </View>
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
  gridItemOuters: {
    flexDirection: 'column',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    width: 175,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'center',
  },
  productMRP: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  gridItems: {
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

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addToCartButton: {
    backgroundColor: '#FF5722',
    padding: 5,
    borderRadius: 5,
  },
  viewAllButton: {
    backgroundColor: '#2196F3',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  kitchenProductOuter: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  }
});
