import React from 'react';
import { View } from 'react-native';

interface Props {
  isHorizontal?: boolean;
  size?: number;
}

const Separator: React.FC<Props> = ({ isHorizontal = false, size = 10 }) => (
  <View style={isHorizontal ? { width: size } : { height: size }} />
);

export default Separator;
