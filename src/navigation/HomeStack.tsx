import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
