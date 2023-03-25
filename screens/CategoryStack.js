import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './SearchScreen';
import CategoryScreen from './CategoryScreen';


const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Category' component={CategoryScreen} />
        <Stack.Screen options={{headerShown:false,animation:'fade_from_bottom'}} name='CategorySearch' component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default CategoryStack