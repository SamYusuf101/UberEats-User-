import { StyleSheet, FlatList, View } from 'react-native';
import  RestauranItem  from '../../components/RestauranItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style = {styles.page}>
       <FlatList 
    data={restaurants}
    renderItem={({ item }) => <RestauranItem restaurant={ item } />}
    showsVerticalScrollIndicator={false}
    />   
    </View>
   
  );
}

const styles = StyleSheet.create({
  page: {
    padding:10
  }
});

