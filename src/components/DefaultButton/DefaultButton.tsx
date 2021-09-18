import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import Typography from '../Typography';
import styles, { buttonTextColors } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton: React.FC<Props> = ({
  additionalStyle = {},
  onPress,
  text,
  textSize = 16,
  variant = 'primary',
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant], additionalStyle]}
      onPress={onPress}
    >
      <Typography
        color={buttonTextColors[variant] || colors.white}
        size={textSize}
        variant="medium"
      >
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default DefaultButton;
