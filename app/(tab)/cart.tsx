import TopHeader from '@/components/TopHeader';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { API_URL } from '../../env';
import { GlobalAccess } from '@/components/location/GlobalAccess';

const CartScreen = () => {

  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const fetchCartData = async () => {
        try {
          const response = await fetch(`${API_URL}getItemInCart?UserId=${GlobalAccess.UserId}`);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          console.log("error", err);          
        } 
      };

      fetchCartData();
    }, [])
  );

  useEffect(() => {
    if (data) {
      const total = data.reduce((sum, item) => sum + (item.Price || 0), 0);
      setTotalAmount(total);
    }
  }, [data]);

  const incrementQuantity = () => {
    //setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      //setQuantity(quantity - 1);
    }
  };

  const deleteProduct = async (id: any) => {
   
    try {
      const response = await fetch(API_URL + "removeItemInCart?id="+id)
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const result = await response.json();
      alert("product is deleted from cart!");
    } catch (err) {
      console.log("error", err);
    }

  };

  return (
    <>
      <TopHeader />
      <View style={styles.header}>
        <Text style={{ color: "#fff", fontSize: 20, fontStyle: "italic" }}>
          <Link href="/(home)/">
            <AntDesign name="arrowleft" size={22} color={"#fff"} /> Carts
          </Link>
        </Text>
      </View>


      <ScrollView style={styles.outerContainer}>
        {data && data.length > 0 ? (
          <>
            {data && data.map((item, index) => (
              <View style={styles.container} key={index}>
                <Image
                   source={{ uri: `${item.ImageUrl}` }}
                  style={styles.image}
                />
                <View style={styles.detailsContainer}>
                  <Text style={styles.name}>{item.Name}</Text>
                  <Text style={styles.price}>₹{item.Price} - {item.Quantity}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decrementQuantity} style={styles.btn}>
                      <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity} style={styles.btn}>
                      <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={() => deleteProduct(item._id)} style={styles.deleteBtn}>
                  <Text style={styles.deleteBtnText}>
                    <FontAwesome size={20} name="trash" color={"#fff"} />
                  </Text>
                </TouchableOpacity>
              </View>

            ))}
            <View style={styles.bottomSection}>
              {/* Total Amount */}
              <View style={styles.totalAmountContainer}>
                <Text style={styles.totalText}>Total Amount:</Text>
                <Text style={styles.amountText}>₹{totalAmount}</Text>
              </View>

              {/* Proceed Button */}
              <Link style={styles.proceedButton} href={`/payment?pay=${totalAmount}`} >
                <Text style={styles.proceedButtonText}>Proceed to Order</Text>
              </Link>
            </View>
          </>
        ) : (
          <Text style={{ textAlign: "center" }}>Your cart is empty</Text>
        )}

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#018786",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  outerContainer: {
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    marginBottom: 3
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#018786',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: '500',
  },
  deleteBtn: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  deleteBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    elevation: 5,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#018786',
  },
  proceedButton: {
    backgroundColor: '#018786',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    textAlign: "center",
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
});
export default CartScreen