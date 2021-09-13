import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator, { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';
import { BookDetailsScreen } from '../screens';
import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={TAB_NAVIGATOR} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
    <Stack.Screen name={BOOK_DETAILS} component={BookDetailsScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
