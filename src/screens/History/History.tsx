import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { Header, Typography } from '../../components';

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <Typography size={18}>History Screen</Typography>
      </View>
    </>
  );
};

export default HistoryScreen;
