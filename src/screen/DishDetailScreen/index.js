import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import restaurants from './../../../assets/data/restaurants.json';

const dish = restaurants[0].dishes[0];

const DishDetailScreen = () => {
  return (
    <View style={styles.page}>
      <Text>{dish.name}</Text>
      <Text>{dish.description}</Text>
      <View style={styles.seperator}></View>
    </View>
  )
};
const styles=StyleSheet.create({
    page: {
       flex: 1
    },
    seperator: {

    }
})

export default DishDetailScreen;