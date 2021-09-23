import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator, { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';
import { BookDetailsScreen, CharacterDetailsScreen } from '../screens';
import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';
import { COMPONENT_NAME as CHARACTER_DETAILS } from '../screens/CharacterDetails/CharacterDetails';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={TAB_NAVIGATOR} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
