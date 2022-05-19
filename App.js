import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import RestaurantDetailScreen from './src/screen/RestaurantDetailScreen';
import DishDetailScreen from './src/screen/DishDetailScreen';
import Basket from './src/screen/Basket';
import OrderScreen from './src/screen/OrderScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <OrderScreen />
    <StatusBar style= "dark" />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  
  
});

