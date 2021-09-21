import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';
import { CustomText } from '..';
import { colors } from '../../utils/theme';

const placeholderImg = require('../../assets/images/placeholder.png');

interface Props {
  id: number;
  title: string;
  imageCover?: string;
}

const BookDetailsItem: React.FC<Props> = ({ id, title, imageCover }) => {
  const onPress = () => goToScreen('BookDetails', { id, title });

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageFrame}>
        <Image source={{ uri: imageCover || placeholderImg }} style={styles.image} />
      </View>
      <CustomText
        numberOfLines={2}
        size={14}
        align="center"
        color={colors.lightOrange}
        variant="bold"
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default BookDetailsItem;
