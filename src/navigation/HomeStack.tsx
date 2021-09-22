import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, HistoryScreen, CharactersScreen } from '../screens';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as HISTORY } from '../screens/History/History';
import { COMPONENT_NAME as CHARACTERS } from '../screens/Characters/Characters';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={HOME} component={HomeScreen} />
    <Stack.Screen name={HISTORY} component={HistoryScreen} />
    <Stack.Screen name={CHARACTERS} component={CharactersScreen} />
  </Stack.Navigator>
);

export default HomeStack;
