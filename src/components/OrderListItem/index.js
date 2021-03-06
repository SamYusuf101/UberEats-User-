import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Order", {id: order.id}) } style={styles.container}>
      <Image 
      source={{uri: order.Restaurant.image}}
      style={styles.image}
      />
      <View >   
      <Text style={styles.name}>{order.Restaurant.name}</Text>
      <Text style={{marginVertical:5}}>3 items  &#8226; #1500</Text>
      <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row', 
        margin:10, 
        alignItems:'center'
    },
    image: {
        width:80, 
        height:80, 
        marginRight:6
    },
    name: {
        fontWeight:'600', 
        fontSize:16
    },


})

export default OrderListItem