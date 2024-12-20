import React,{ useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView ,Modal, TextInput,} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import TopHeader from '@/components/TopHeader';
import { GlobalAccess } from '@/components/location/GlobalAccess';

const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSaveAddress = () => {
    // Logic to save the new address
    console.log('New address saved:', { address, phone, postalCode });
    setModalVisible(false);
  };

  return (
    <>
    <TopHeader/>
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          style={styles.avatar}
          source={require("@/assets/images/nadeem.jpg")} // Sample avatar
        />
        <Text style={styles.name}>Nadeem Ansari</Text>
        <Text style={styles.email}>mohammadnadeem9825@gmail.com</Text>
        <Text style={styles.phone}>+91 8924957027</Text>
      </View>
      
      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressBlock}>
          <Text style={styles.addressText}> {GlobalAccess.Country} {GlobalAccess.State} {GlobalAccess.City}, {GlobalAccess.PostalCode}</Text>
          <TouchableOpacity style={styles.updateAddressButton}>
            <MaterialIcons name="edit-location" size={18} color="#fff" />
            <Text style={styles.updateAddressText}>Update Address</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addAddressButton} onPress={() => setModalVisible(true)}>
          <FontAwesome name="plus" size={18} color="#018786" />
          <Text style={styles.addAddressText}>Add Another Address</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Actions</Text>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="edit" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="settings" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Popup Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Delivery Address</Text>

            <TextInput
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
            />
            <TextInput
              placeholder="Postal Code"
              value={postalCode}
              onChangeText={setPostalCode}
              keyboardType="numeric"
              style={styles.input}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#018786',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  phone: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressBlock: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    color: '#333',
  },
  updateAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#018786',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  updateAddressText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  addAddressText: {
    color: '#018786',
    fontSize: 16,
    marginLeft: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#018786',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#018786',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
