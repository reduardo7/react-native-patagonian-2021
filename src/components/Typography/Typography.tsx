import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { colors } from '../../utils/theme';

const typographyVariant = {
  bold: 'Raleway-Bold',
  italic: 'Raleway-Italic',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
};

interface StyleProps {
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: string;
  size?: number;
  variant?: keyof typeof typographyVariant;
}

interface Props extends StyleProps {
  children: ReactNode;
  numberOfLines?: number;
}

const getTextStyle = ({ align, color, size, variant = 'regular' }: StyleProps) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };

  return textStyle;
};

const Typography: React.FC<Props> = ({
  align = 'left',
  children,
  color = colors.black,
  numberOfLines,
  size = 14,
  variant = 'regular',
}) => {
  const textStyle = getTextStyle({ align, color, size, variant });

  return (
    <Text allowFontScaling={false} style={textStyle} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default Typography;
