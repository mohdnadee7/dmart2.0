import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddressPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // State variables for each input field
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddAddress = () => {
    // Handle address submission here
    console.log('City:', city);
    console.log('Street:', street);
    console.log('House Number:', houseNumber);
    console.log('Phone Number:', phoneNumber);

    // Close the modal after adding the address
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Button to Open Modal */}
      <Button title="Add Address" onPress={() => setModalVisible(true)} />

      {/* Modal Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Enter Address</Text>

            {/* City Input */}
            <TextInput
              style={styles.input}
              placeholder="City"
              value={city}
              onChangeText={(text) => setCity(text)}
            />

            {/* Street Input */}
            <TextInput
              style={styles.input}
              placeholder="Street"
              value={street}
              onChangeText={(text) => setStreet(text)}
            />

            {/* House Number Input */}
            <TextInput
              style={styles.input}
              placeholder="House/Building Number"
              value={houseNumber}
              onChangeText={(text) => setHouseNumber(text)}
            />

            {/* Phone Number Input */}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />

            {/* Add Button */}
            <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddressPopup;
