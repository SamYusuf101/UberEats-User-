import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'


const DishListItem = ({ dish }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Dish", {id: dish.id})} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>{dish.price}</Text>

            </View>
            <View>
                {dish.image && (<Image source={{ uri: dish.image }} style={styles.image} />)}
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        flexDirection: 'row'
    },
    image: {
        height: 75,
        aspectRatio: 1


    },
    name: {
        fontWeight: '600',
        fontSize: 17,
        letterSpacing: 0.5

    },
    description: {
        color: 'grey'

    },
    price: {
        fontSize: 16

    }


});

export default DishListItem;
