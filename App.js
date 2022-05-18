import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import  RestauranItem  from './src/components/RestauranItem';



export default function App() {
  return (
    <View style={styles.container}>
    <RestauranItem  title="rest 1"/>
    <RestauranItem  title="rest 2"/>
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

