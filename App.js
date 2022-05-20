import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer> 
        <RootNavigator/>
        <StatusBar style="dark" />   
    </NavigationContainer>


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

