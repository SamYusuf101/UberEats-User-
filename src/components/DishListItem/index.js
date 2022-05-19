import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const DishListItem = ({dish}) => {
  return (
    <View style={styles.container}>
    <View style={{flex:1}}>
    <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
      <Text style={styles.price}>{dish.price}</Text>
    
    </View>
    <View>
    {dish.image && (<Image source= {{uri: dish.image}} style={styles.image}/>)}
    </View>
      
    </View>
  )
}

const styles= StyleSheet.create ({
    container: {
        marginVertical: 6,
        paddingVertical: 10,
        marginHorizontal:20,
        borderBottomColor: 'grey',
        borderBottomWidth:1,
        flexDirection:'row'
    },
    image: {
        height:75,
        aspectRatio:1

              
    },
    name: {
        fontWeight:'600',
        fontSize: 17,
        letterSpacing: 0.5

    },
    description: {
        color: 'grey'

    },
    price: {
        fontSize:16

    }
   

});

export default DishListItem;