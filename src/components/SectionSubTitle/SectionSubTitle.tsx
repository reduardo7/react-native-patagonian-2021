import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { Typography } from '..';

interface Props {
  text: string;
}

const SectionSubTitle = (props: Props) => {
  return (
    <View style={styles.sectionTitle}>
      <Typography align="center" color={colors.darkRed} variant="bold" size={25}>
        {props.text}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 10,
  },
});

export default SectionSubTitle;
