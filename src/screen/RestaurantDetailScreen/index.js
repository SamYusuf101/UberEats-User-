import { View, FlatList, } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header.js';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';


const restaurant = restaurants[0];


const RestaurantDetailPage = () => {
  const route = useRoute();
  const navigation = useNavigation(); 

  const id = route.params?.id;
  

  return (
    <View style={styles.page}>

      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
    />
      <Ionicons
      onPress={() => navigation.goBack()}
       name="arrow-back-circle" size={38} color="white"
        style={{
          position: 'absolute',
          top: 40,
          left: 10,
        }} />

    </View>
  )
};




export default RestaurantDetailPage;