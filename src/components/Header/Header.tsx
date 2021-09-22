import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View>
      <Image style={styles.hpBackground} source={require('../../assets/images/header-bg.png')} />
      <Image style={styles.hpLogo} source={require('../../assets/images/header-hp.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  hpLogo: {
    position: 'absolute',
    top: 70,
    left: '46%',
    height: 44,
  },
  hpBackground: {
    top: 50,
    height: 84,
  },
});

export default Header;
