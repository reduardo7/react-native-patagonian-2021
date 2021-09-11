import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExperimentalScreen, WelcomeScreen } from '../screens';
import { COMPONENT_NAME as EXPERIMENTAL } from '../screens/Experimental/Experimental';
import { COMPONENT_NAME as WELCOME } from '../screens/Welcome/Welcome';

const Stack = createNativeStackNavigator();

export const COMPONENT_NAME = 'AuthStack';

const AuthStack = () => (
  <Stack.Navigator initialRouteName={WELCOME} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={EXPERIMENTAL} component={ExperimentalScreen} />
    <Stack.Screen name={WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AuthStack;
