import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import  RestauranItem  from './src/components/RestauranItem';
import restaurants from './assets/data/restaurants.json';



export default function App() {
  return (
    <View style={styles.container}>
    <FlatList 
    data={restaurants}
    renderItem={({ item }) => <RestauranItem restaurant={ item } />}
    />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding :10
  },
  
  
});

