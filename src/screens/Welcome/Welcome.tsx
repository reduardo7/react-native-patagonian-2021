import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';
import { goToScreen, replaceRoute } from '../../navigation/controls';
import { COMPONENT_NAME as EXPERIMENTAL } from '../Experimental/Experimental';
import { COMPONENT_NAME as TAB_NAVIGATOR } from '../../navigation/TabNavigator';

const goToMainTabs = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'true');
    replaceRoute(TAB_NAVIGATOR);
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const goToExperimentalScreen = () => {
  goToScreen(EXPERIMENTAL);
};

const checkIfUserIsLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('userLoggedInFlag');
    if (value !== null && value === 'true') {
      goToMainTabs();
    }
  } catch (error) {
    console.log('Error getting userLoggedInFlag', error);
  }
};

export const COMPONENT_NAME = 'Welcome';

const WelcomeScreen = () => {
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultButton text="Go To Tabs" textSize={16} onPress={goToMainTabs} />
      <Separator size={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={goToExperimentalScreen}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
