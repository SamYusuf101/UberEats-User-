import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import RestaurantDetailScreen from './src/screen/RestaurantDetailScreen';
import DishDetailScreen from './src/screen/DishDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <DishDetailScreen/>
    <StatusBar style= "light" />
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

