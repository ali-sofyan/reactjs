import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import CategoryStack from './CategoryStack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';

const Tab = createBottomTabNavigator();


const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" 
      tabBarOptions={{
        activeTintColor: '#ffff',
        inactiveTintColor: '#F0D2D1',
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          backgroundColor: '#66B3BA'
        },
      }}>
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Category" component={CategoryStack} />
    </Tab.Navigator>
  )
}

export default MainTab