import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { IS_ANDROID } from '../../utils/constants';

interface Props {
  align: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color: string;
  numberOfLines?: number;
  size: number;
  space: number;
  variant?: keyof typeof fontVariant;
}

const fontVariant = {
  bold: IS_ANDROID ? 'Raleway-Bold' : 'Raleway Bold',
  italic: IS_ANDROID ? 'Raleway-Italic' : 'Raleway Italic',
  medium: IS_ANDROID ? 'Raleway-Medium' : 'Raleway Medium',
  regular: IS_ANDROID ? 'Raleway-Regular' : 'Raleway Regular',
};

const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color: color,
    fontFamily: fontVariant[variant],
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};

const spaceLetters = (text: any, space: number) => {
  if (typeof text === 'string') {
    return text.split('').join('\u200A'.repeat(space));
  } else {
    return text;
  }
};

const CustomText = ({ align, children, color, numberOfLines, size, space, variant }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant });
  if (space > 0) {
    children = spaceLetters(children, space);
  }
  return (
    <Text allowFontScaling={false} style={textStyle} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  align: 'left',
  color: 'black',
  size: 20,
  space: 0,
  variant: 'regular',
};

export default CustomText;
