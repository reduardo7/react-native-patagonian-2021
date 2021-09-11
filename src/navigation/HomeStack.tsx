import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExperimentalScreen, HomeScreen } from '../screens';
import { COMPONENT_NAME as EXPERIMENTAL } from '../screens/Experimental/Experimental';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={EXPERIMENTAL} component={ExperimentalScreen} />
    <Stack.Screen name={HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
