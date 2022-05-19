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
    page: {
        flex: 1,
        width: "100%",
        paddingVertical:50,
        padding: 10
    },
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
    yourStyle: {
        fontSize:15,
        fontWeight: '500',
        padding:5,
        marginVertical:5,
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
        top:5,
        padding: 5
  
    },
    quantity: {
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:20

    },
    seperator: {
        height:1,
        backgroundColor:"grey",
        marginVertical:40

    },
    name: {
        fontSize:25,
        fontWeight:"600"

    },
    description: {
        color:"grey"

    }
})


export default BasketDishItem;