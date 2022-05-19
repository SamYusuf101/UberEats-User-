import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const restaurant= restaurants[0];

const RestaurantDetailPage = () => {
  return (
    <View style={styles.page}>
    <Image source ={{uri: restaurant.image}} style={styles.image} />
    <View style={styles.iconContainer} >
    <Ionicons name="arrow-back-circle" size={38} color="white"  style={styles.imageicon}/>
    </View>
      <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
      ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}
        -{restaurant.maxDeliveryTime} minutes</Text>

        </View>
      
    </View>
  )
};

const styles= StyleSheet.create ({
    page: {
        flex: 1
    },
    imageicon: {

    },
    image: {
        width: "100%",
        aspectRatio : 4 / 3

    },
    iconContainer: {
      position: 'absolute',
      top: 40,
      left: 10,
    },
    container: {
         margin: 10,
         paddingBottom:19,
         borderBottomColor: 'red'
    },
    title: {
        fontSize: 30,
        fontWeight: '600'

    },
    subtitle: {
        fontSize: 15,
        color: 'grey'
    }
})

export default RestaurantDetailPage;