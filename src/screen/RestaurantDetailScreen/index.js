import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header.js';
import styles from './styles';


const restaurant= restaurants[0];

const RestaurantDetailPage = () => {
  return (
    <View style={styles.page}>
    
        <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant}/>}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item}/> }
        showsVerticalScrollIndicator={false}
        />
        <Ionicons name="arrow-back-circle" size={38} color="white"  
        style={{
          position: 'absolute',
          top: 40,
          left: 10,
        }}/>
      
    </View>
  )
};




export default RestaurantDetailPage;