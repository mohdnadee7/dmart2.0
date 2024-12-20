import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import TopHeader from "@/components/TopHeader";
import { useState } from "react";
import CartHeader from "@/components/grocery/CartHeader";

export default function Details() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Masala Spice Mix',
    description: 'A delicious mix of spices for all your cooking needs.',
    price: '₹199',
    mrp: '₹250',
    discountPercentage: '20%',
    image1: require('@/assets/images/g1.png'),
    image2: require('@/assets/images/g2.png'),
    image3: require('@/assets/images/g3.png'),
  };

  const relatedProducts = [
    { id: 1, name: 'Chilli Powder', price: '₹99', image: require('@/assets/images/g1.png') },
    { id: 2, name: 'Turmeric Powder', price: '₹89', image: require('@/assets/images/g2.png') },
    { id: 3, name: 'Chilli Powder', price: '₹12', image: require('@/assets/images/g3.png') },
    { id: 4, name: 'Turmeric Powder', price: '₹59', image: require('@/assets/images/g4.png') },
    { id: 5, name: 'Chilli Powder', price: '₹60', image: require('@/assets/images/g5.png') },
    { id: 6, name: 'Turmeric Powder', price: '₹39', image: require('@/assets/images/g6.png') },
  ];

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <>
      <TopHeader />
      <SafeAreaView style={styles.safeArea}>
        <CartHeader/>

        <ScrollView>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={false}
            autoplayTimeout={3}
            loop={true}
          >
            <View style={styles.slide}>
              <Image
                source={product.image1}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={product.image2}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={product.image3}
                style={styles.image}
              />
            </View>
          </Swiper>
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>

            {/* Price and Discount Info */}
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{product.price}</Text>
              <Text style={styles.mrp}>MRP: {product.mrp}</Text>
              <Text style={styles.discount}>{product.discountPercentage} OFF</Text>
            </View>

            {/* Quantity Selector */}
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          {/* Related Products Section */}
          <View style={styles.relatedProductsContainer}>
            <Text style={styles.relatedProductsTitle}>Related Products</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {relatedProducts.map((item) => (
                <View key={item.id} style={styles.relatedProductCard}>
                  <Image source={item.image} style={styles.relatedProductImage} />
                  <Text style={styles.relatedProductName}>{item.name}</Text>
                  <Text style={styles.relatedProductPrice}>{item.price}</Text>
                </View>
              ))}
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {relatedProducts.map((item) => (
                <View key={item.id} style={styles.relatedProductCard}>
                  <Image source={item.image} style={styles.relatedProductImage} />
                  <Text style={styles.relatedProductName}>{item.name}</Text>
                  <Text style={styles.relatedProductPrice}>{item.price}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
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
  iconContainer: {
    position: "relative",
  },
  wrapper: {
    height: 200,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#018786',
  },
  mrp: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  discount: {
    fontSize: 14,
    color: '#f00',
    marginLeft: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  quantityButton: {
    backgroundColor: '#018786',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#018786',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 16,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  relatedProductsContainer: {
    padding: 20,
  },
  relatedProductsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  relatedProductCard: {
    marginRight: 10,
    padding: 5,
    width: 120,
    alignItems: 'center',
  },
  relatedProductImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  relatedProductName: {
    fontSize: 14,
    color: '#333',
  },
  relatedProductPrice: {
    fontSize: 14,
    color: '#018786',
    fontWeight: 'bold',
  },
});
