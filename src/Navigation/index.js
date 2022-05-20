import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import RestaurantDetailScreen from "../screen/RestaurantDetailScreen";
import OrderScreen from '../screen/OrderScreen';
import { Entypo, FontAwesome, Foundation } from '@expo/vector-icons';
import DishDetailScreen from '../screen/DishDetailScreen';
import Basket from '../screen/Basket';
import OrderDetails from '../screen/OrderDetails';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeTabs" component={HomeTabs}  /> 
          
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return(
    <Tab.Navigator barStyle={{ backgroundColor:'white' }}>
      <Tab.Screen 
      name = "Home" 
      component={HomeStackNavigator} 
      options={{ tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />}}/>
      <Tab.Screen 
      name = "Orders" 
      component={OrderStackNavigator} 
      options={{ tabBarIcon: ({color}) => <Foundation name="address-book" size={24} color={color}/>}}/>
      <Tab.Screen 
      name = "Profile" 
      component={OrderScreen} 
      options={{ tabBarIcon: ({color}) => <FontAwesome name="user-circle-o" size={24} color={color} />}}/>

    </Tab.Navigator>
    
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
    <HomeStack.Screen name= "Restaurants" component={HomeScreen} />
    <HomeStack.Screen name= "Restaurant" component={RestaurantDetailScreen} />
    <HomeStack.Screen name= "Dish" component={DishDetailScreen} />
    <HomeStack.Screen name= "Basket" component={Basket} />



    </HomeStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
    <OrdersStack.Screen name= "Orders" component={OrderScreen} />
    <OrdersStack.Screen name= "Order" component={OrderDetails} />
 


    </OrdersStack.Navigator>
  )
}


export default RootNavigator;

