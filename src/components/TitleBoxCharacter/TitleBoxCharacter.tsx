import React from 'react';

import { View } from 'react-native';
import { Typography } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  name: string;
  textSize?: number;
}

const TitleBoxCharacter = ({ name, textSize }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Typography color={colors.darkRed} size={textSize} variant="bold" align="center">
        {name}
      </Typography>
    </View>
  );
};
TitleBoxCharacter.defaultProps = {
  textSize: 14,
};
export default TitleBoxCharacter;
