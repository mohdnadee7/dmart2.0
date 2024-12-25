import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { API_URL } from '../../env';
import { GlobalAccess } from '@/components/location/GlobalAccess';

const DealsOfTheDay = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(API_URL + 'products');
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    const result = await response.json(); // Await the JSON parsing
                    console.log("res", result);
                    setData(result); // Set the fetched data
                } catch (err) {
                    console.log("error", err);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData(); // Call the fetch function
        }, []) // Empty dependency array for focus effect
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    const addToCart = async (itemId: any) => {
        try {
            const response = await fetch(API_URL + "addItemInCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ProductId: itemId,
                    UserId: GlobalAccess.UserId
                }),
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
            alert("Item added in your cart!")
        } catch (err) {
            console.log("error", err);
        }

    }
    return (
        <>
            <View
                style={{
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}
            >
                <Text style={{ color: "#000", fontWeight: 600 }}>
                    Deals of the day
                </Text>
                <Text style={{ color: "#fff", backgroundColor: "#0039a6", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, fontWeight: 600 }}>
                    <Link href={`/details?description=${encodeURIComponent('Deals of the day')}`}>  View all </Link>
                </Text>
            </View>

            <View style={styles.container}>
                {data && data.map((item, index) => (
                    <View style={styles.dealsOfTheDay} key={index}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: `${item.ImageUrl}` }}
                                style={styles.gridItemImg}
                            />
                            <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item._id)}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.productTitle}>{item.Name}</Text>
                        <Text style={styles.productPrice}>₹{item.Price} {item.Quantity}</Text>
                        <Text style={styles.productMRP}>MRP ₹{item.MRP}</Text>
                        <View style={styles.buttonContainer}>
                            <Link href={`/(tab)/(home)/details/${item.Id}`} style={styles.viewAllButton}>
                                <Text style={styles.buttonText}>View All</Text>
                            </Link>
                        </View>
                    </View>
                ))}
            </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },
    dealsOfTheDay: {
        flexDirection: 'column',
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        backgroundColor: '#ddd',
        width: 110,
    },
    imageContainer: {
        position: 'relative', // To contain the absolute positioned button
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#4CAF50', // Green color for price
        textAlign: 'center',
    },
    productMRP: {
        fontSize: 14,
        color: '#888',
        textDecorationLine: 'line-through', // Strike-through for MRP
        textAlign: 'center',
    },
    gridItemImg: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    itemTitle: {
        fontSize: 12,
        textAlign: "center",
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: "wrap",
        marginTop: 10,
    },
    addToCartButton: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#018786',
        padding: 5,
        borderRadius: 5,
    },
    viewAllButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#018786",
        paddingHorizontal: 17,
        borderRadius: 3,
    },
    buttonText: {
        color: '#018786',
        fontSize: 12,
        textAlign: 'center',
    },
})
export default DealsOfTheDay