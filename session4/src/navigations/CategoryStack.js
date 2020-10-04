import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Plp from '../screens/Plp'
import Category from '../screens/Category'
import Detail from '../screens/Detail'
import Cart from '../screens/Cart'

const Stack = createStackNavigator();


const CategoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Product" component={Plp} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CategoryStack