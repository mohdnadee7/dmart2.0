import { GlobalAccess } from '@/components/location/GlobalAccess';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function Address() {
    const [search, setSearch] = useState("");


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href="/(home)/" style={{ marginTop: 3 }}>
                    <MaterialIcons name="keyboard-arrow-left" color={"#000"} size={20} />
                </Link>
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "500" }}>
                    Your Location
                </Text>
            </View>
            <TextInput
                style={styles.searchBox}
                placeholder="Search a new address"
                value={search}
                onChangeText={setSearch}
            />
            {/* <Button title="Add Location" onPress={() => alert(`Location Added: ${search}`)} /> */}

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "500", marginBottom: 10 }}>Saved Locations</Text>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <MaterialCommunityIcons name="map-marker-radius" style={{ fontSize: 25,marginTop:7 }} />
                    <View>
                        <Text style={{ fontWeight: "600" }}> Current</Text>
                        <Text> {GlobalAccess.Country} {GlobalAccess.State} {GlobalAccess.City}, {GlobalAccess.PostalCode}</Text>
                    </View>
                </View>

                <View style={{ padding: 10, flexDirection: "row" }}>
                    <MaterialCommunityIcons name="map-marker-radius" style={{ fontSize: 25,marginTop:7 }} />
                    <View>
                        <Text style={{ fontWeight: "600" }}> Home</Text>
                        <Text> 130 A Alinagarh, Azmatgarh dist Azamgarh, Uttar Pradesh, India 276124</Text>
                    </View>
                </View>

                <View style={{ padding: 10, flexDirection: "row" }}>
                    <MaterialCommunityIcons name="map-marker-radius" style={{ fontSize: 25,marginTop:7 }} />
                    <View>
                        <Text style={{ fontWeight: "600" }}> Office</Text>
                        <Text> Plot no - D-176, Phase -8-B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#ffffff"
    },
    searchBox: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    map: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: "row",
        borderBlockColor: "#000",
        borderBottomWidth: 1,
    },
});
