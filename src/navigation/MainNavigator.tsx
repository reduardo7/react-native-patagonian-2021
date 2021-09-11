import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack, { COMPONENT_NAME as AUTH_STACK } from './AuthStack';
import TabNavigator, { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';
import { BookDetailsScreen, ExperimentalScreen } from '../screens';
import { COMPONENT_NAME as EXPERIMENTAL } from '../screens/Experimental/Experimental';
import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={AUTH_STACK} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AUTH_STACK} component={AuthStack} />
    <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
    <Stack.Screen name={BOOK_DETAILS} component={BookDetailsScreen} />
    <Stack.Screen name={EXPERIMENTAL} component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
