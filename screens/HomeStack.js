import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen} />
        <Stack.Screen options={{headerShown:false,animation:'fade_from_bottom'}} name='HomeSearch' component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack