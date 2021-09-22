import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  HomeScreen,
  HistoryScreen,
  CharactersScreen,
  BookDetailsScreen,
  CharacterDetailsScreen,
} from '../screens';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as HISTORY } from '../screens/History/History';
import { COMPONENT_NAME as CHARACTERS } from '../screens/Characters/Characters';
import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';
import { COMPONENT_NAME as CHARACTER_DETAILS } from '../screens/CharacterDetails/CharacterDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={HOME} component={HomeScreen} />
    <Stack.Screen name={HISTORY} component={HistoryScreen} />
    <Stack.Screen name={CHARACTERS} component={CharactersScreen} />
    <Stack.Screen name={BOOK_DETAILS} component={BookDetailsScreen} />
    <Stack.Screen name={CHARACTER_DETAILS} component={CharacterDetailsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
