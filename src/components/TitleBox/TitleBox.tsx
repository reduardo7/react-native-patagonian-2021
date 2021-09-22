import React from 'react';

import { View } from 'react-native';
import { Typography } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  title: string;
  textSize?: number;
}

const TitleBox = ({ title, textSize }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Typography color={colors.darkRed} size={textSize} variant="bold" align="center">
        {title}
      </Typography>
    </View>
  );
};
TitleBox.defaultProps = {
  textSize: 14,
};
export default TitleBox;
