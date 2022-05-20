import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import RestaurantDetailScreen from "../screen/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} /> 
          <Stack.Screen name="Restaurant" component={RestaurantDetailScreen} 
          options={{headerShown:false}}/> 
        </Stack.Navigator>
    );
};

export default RootNavigator;