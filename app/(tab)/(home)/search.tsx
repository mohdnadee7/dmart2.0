import TopHeader from "@/components/TopHeader";
import { Feather, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import React, { useState ,useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Keyboard,
  Image
} from "react-native";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    //if (!query.trim()) return; // Do nothing if query is empty
    setLoading(true);
    setError("");
    try {
      const response = await fetch( 
        'https://d5ac-122-176-123-99.ngrok-free.app/api/Product/get-products'
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
        fetchProducts();
    },[]))
  const handleSearch = () => {
  //  Keyboard.dismiss(); // Hide the keyboard
    fetchProducts();
  };

  const handleBack = () => {
   // Keyboard.dismiss(); // Hide the keyboard
    fetchProducts();
  };
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      //onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      {/* Product Image */}
      <Image source={{uri:`${item.imageUrl}`}} style={styles.productImage} />
      {/* Product Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>₹{item.price.toLocaleString()}</Text>
            <Text style={styles.productMRP}>₹{item.mrp.toLocaleString()}</Text>
            <Text style={styles.productDiscount}>30% off</Text>
          </View>
        {/* Ratings */}
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <FontAwesome name="star" size={16} color="#FFD700" />
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <TopHeader />
    <View style={styles.container}>
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      {/* Search Box */}
      <View style={{width:"85%"}}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              value={query}
              onSubmitEditing={handleSearch}
            />
            <Fontisto name="search" size={20} color="#aaa" style={styles.icon} />
          </View>
          </View>
      {/* Shop Icon */}
      <TouchableOpacity>
        <Feather name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
      </View>
      {/* Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Loading Indicator */}
      {loading ? <Text style={styles.loadingText}>Loading...</Text> : null}

      {/* Products List */}
      <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} // Grid layout
        contentContainerStyle={styles.listContainer}
      />
    </View>
    </View>
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#018786",
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  loadingText: {
    textAlign: "center",
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    backgroundColor: "#f2f2f2",
  },
  productDetails: {
    padding: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#018786",
    marginRight: 5,
  },
  productMRP: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  productDiscount: {
    fontSize: 14,
    color: "#FF4500",
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
});
