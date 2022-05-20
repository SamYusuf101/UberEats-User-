import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState}  from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import BasketDishItem from '../../components/BasketDishItem';


const restaurant = restaurants[0]


 const Basket= () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.yourStyle}>Your items </Text>
            <FlatList
            data={restaurant.dishes}
            renderItem={({item}) => <BasketDishItem BasketDish={item}/>}
            />
            <View style={styles.seperator}></View>
            
            <View style={styles.button}>
            <Text style={styles.buttonText}>Create order</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical:50,
        padding: 10
    },
    itemsNum: {
        fontSize:15,
        fontWeight: '400',
        padding:5,
    },
    
    itemsMoney: {
        fontSize:15,
        fontWeight: '400',
        padding:5,
        marginLeft:'auto'

    },
    yourStyle: {
        fontSize:17,
        fontWeight: '500',
        padding:5,
        marginVertical:2,
        top: 6
    },
    quantityContainer: {
        backgroundColor:'grey',
        borderRadius:10,
        paddingVertical:2,
        marginRight:5,
        paddingHorizontal:5

    },
    button: {
        backgroundColor: "black",
        marginTop:"auto",
        padding:20,
        borderRadius:20,
        alignItems:'center',


    },
    buttonText: {
        color:'white',
        fontWeight:'600',
        fontSize:20

    },
    row: {
        flexDirection:'row',
        alignItems: 'center',
        top:35,
  
    },
    quantity: {
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:20

    },
    seperator: {
        height:1,
        backgroundColor:"grey",
        marginVertical:5

    },
    name: {
        fontSize:25,
        fontWeight:"600"

    },
    description: {
        color:"grey"

    }
})

export default Basket;