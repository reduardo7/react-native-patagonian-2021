import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, HistoryScreen } from '../screens';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as HISTORY } from '../screens/History/History';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={HOME} component={HomeScreen} />
    <Stack.Screen name={HISTORY} component={HistoryScreen} />
  </Stack.Navigator>
);

export default HomeStack;
