import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';
import { CustomText } from '..';
import { colors } from '../../utils/theme';

interface Props {
  id: Character['id'];
  name: Character['name'];
}

const CharacterDetailsItem: React.FC<Props> = ({ id, name }) => {
  const onPress = () => goToScreen('CharacterDetails', { id, name });
  const imgSource = require('../../assets/images/placeholder.png');

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageFrame}>
        <Image source={imgSource} style={styles.image} />
      </View>
      <CustomText numberOfLines={2} size={14} align="center" color={colors.darkGray} variant="bold">
        {name}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CharacterDetailsItem;
