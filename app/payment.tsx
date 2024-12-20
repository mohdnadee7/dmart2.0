import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView,Linking,Alert } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import TopHeader from '@/components/TopHeader';
import { useNavigation } from '@react-navigation/native';
const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const totalAmount = 2500.00;
  const navigation = useNavigation();

  const handleUPIPayment = (appScheme) => {
    const upiLink = `${appScheme}pay?pa=example@upi&pn=YourShop&am=${totalAmount}&cu=INR&tn=Payment for Order`;
    Linking.canOpenURL(upiLink)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(upiLink);
        } else {
          Alert.alert('Error', 'Unable to open the UPI app. Please install or check the app.');
        }
      })
      .catch((err) => console.error('Failed to open UPI app:', err));
  };

  // Handles Cash on Delivery
  const handleCashOnDelivery = () => {
    Alert.alert('Order Placed', 'Your order has been placed with Cash on Delivery.');
  };

  const handleProceed = () => {
    if (selectedOption === 'cod') {
      handleCashOnDelivery();
    } else {
      console.log('Proceeding with payment:', selectedOption);
    }
  };

  return (
    <>
    <TopHeader/>
    <View style={styles.container}>
      {/* Top Section: Total Amount */}
      <View style={styles.totalContainer}>
         {/* Back Arrow */}
         <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight:10}}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        {/* Total Amount */}
        <Text style={styles.totalText}>Total Amount: ₹{totalAmount.toFixed(2)}</Text>
      </View>

      {/* Payment Options */}
      <ScrollView style={styles.paymentOptionsContainer}>
        <Text style={styles.header}>Select Payment Method</Text>

        {/* Credit/Debit Card Option */}
        <TouchableOpacity
          style={[styles.optionContainer, selectedOption === 'card' && styles.selectedOption]}
          onPress={() => setSelectedOption('card')}
        >
          <View style={styles.optionRow}>
            <MaterialIcons name="credit-card" size={24} color="#018786" />
            <Text style={styles.optionText}>Credit/Debit Card</Text>
          </View>
        </TouchableOpacity>
        {selectedOption === 'card' && (
          <View style={styles.cardDetailsContainer}>
            <TextInput
              placeholder="Card Number"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <TextInput placeholder="Expiry Date" style={styles.textInput} />
            <TextInput placeholder="CVV" keyboardType="numeric" style={styles.textInput} />
          </View>
        )}

        {/* UPI Option */}
        <TouchableOpacity
          style={[styles.optionContainer, selectedOption === 'upi' && styles.selectedOption]}
          onPress={() => setSelectedOption('upi')}
        >
          <View style={styles.optionRow}>
            <FontAwesome5 name="mobile-alt" size={22} color="#018786" />
            <Text style={styles.optionText}>UPI</Text>
          </View>
        </TouchableOpacity>
        {selectedOption === 'upi' && (
          <View style={styles.upiProviderContainer}>
            {/* UPI Providers like Google Pay, PhonePe, Paytm */}
            <TouchableOpacity style={styles.upiProvider}
            onPress={() => handleUPIPayment('upi://googlepay/')}>
              <FontAwesome5 name="google-pay" size={28} color="#34a853" />
              <Text style={styles.upiProviderText}>Google Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upiProvider}
            onPress={() => handleUPIPayment('upi://phonepe/')}>
              <FontAwesome5 name="mobile-alt" size={24} color="#5b2d8f" />
              <Text style={styles.upiProviderText}>PhonePe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upiProvider}
            onPress={() => handleUPIPayment('upi://paytm/')}>
              <FontAwesome5 name="mobile-alt" size={24} color="#003399" />
              <Text style={styles.upiProviderText}>Paytm</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Net Banking Option */}
        <TouchableOpacity
          style={[styles.optionContainer, selectedOption === 'netBanking' && styles.selectedOption]}
          onPress={() => setSelectedOption('netBanking')}
        >
          <View style={styles.optionRow}>
            <MaterialIcons name="account-balance" size={24} color="#018786" />
            <Text style={styles.optionText}>Net Banking</Text>
          </View>
        </TouchableOpacity>
        {selectedOption === 'netBanking' && (
          <View style={styles.bankDetailsContainer}>
            <TextInput placeholder="Enter Bank Name" style={styles.textInput} />
          </View>
        )}

        <TouchableOpacity
          style={[styles.optionContainer, selectedOption === 'cod' && styles.selectedOption]}
          onPress={() => setSelectedOption('cod')}
        >
          <View style={styles.optionRow}>
            <MaterialIcons name="local-shipping" size={24} color="#018786" />
            <Text style={styles.optionText}>Cash on Delivery</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Section: Proceed Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#018786',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  paymentOptionsContainer: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    borderColor: '#018786',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  cardDetailsContainer: {
    marginTop: 10,
  },
  upiProviderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  upiProvider: {
    alignItems: 'center',
  },
  upiProviderText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  bankDetailsContainer: {
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  bottomContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: '#018786',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
