import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const BasketDishItem = ({BasketDish}) => {
    return(
        <View style={styles.row}>
              <View style={styles.quantityContainer}>
              <Text style={styles.itemsNum}>1</Text>
              </View>
              <Text style={styles.itemsNum}>{BasketDish.name}</Text>
              <Text style={styles.itemsMoney}>${BasketDish.price}</Text>    
         </View>
    )

};

const styles = StyleSheet.create({
   
    itemsNum: {
        fontSize:15,
        fontWeight: '400',
        
    },
    
    itemsMoney: {
        fontSize:15,
        fontWeight: '400',
        padding:5,
        marginLeft:'auto'

    },
    
    quantityContainer: {
        backgroundColor:'grey',
        borderRadius:10,
        paddingVertical:2,
        marginRight:5,
        paddingHorizontal:5

    },
   
    row: {
        flexDirection:'row',
        alignItems: 'center',
        top:5,
        padding: 5
  
    },
    quantity: {
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:20

    },
  
    name: {
        fontSize:25,
        fontWeight:"600"

    },
    
})


export default BasketDishItem;