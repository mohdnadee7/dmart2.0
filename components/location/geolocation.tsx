import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { GlobalAccess } from './GlobalAccess';
import { Link } from 'expo-router';

export default function GeoLocation() {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            // Request location permissions
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // Get current position
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            // Reverse geocode to get human-readable address
            const addressResponse = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            // We take the first result from the array of addresses returned
            if (addressResponse.length > 0) {
                console.log(addressResponse);
                setAddress(addressResponse[0]);
            }
        })();
    }, []);

    if (address) {
        GlobalAccess.Country = address.country;
        GlobalAccess.State = address.state;
        GlobalAccess.City = address.city;
        GlobalAccess.PostalCode = address.postalCode;
    }

    return (

        <View style={{ backgroundColor: "#018786", paddingBottom: 5 }}>
            <View style={styles.location}>
                <FontAwesome5 name="shipping-fast" size={20} color="#fff" />
                <Text style={styles.deliveryBy}> Delivery In 10 Mins</Text>
            </View>
            {address ? (
                <View style={styles.row}>
                    <Text style={styles.deviceAddress}>{address.city} {address.street} ...</Text>
                    <Link href={'/(tab)/(home)/address'} style={styles.downArrow}>
                    <MaterialIcons name="keyboard-arrow-down" color={"#fff"} size={20}  />
                    </Link>
                    
                </View>
            ) : (
                <Text>Fetching Address...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    deliveryBy: {
        fontWeight: '500',
        marginTop: -6,
        color: "#fff"
    },
    deviceAddress: {
        fontWeight: '500',
        fontSize: 11,
        marginLeft: 40,
        marginTop: -6,
        color: "#fff"
    },
    row: {
        flexDirection: "row", 
        alignItems: "center", 
      },
    downArrow: {
      marginTop:-6,
      fontWeight:"bold"
    }
});
