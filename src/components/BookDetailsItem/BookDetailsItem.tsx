import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';
import { CustomText } from '..';
import { colors } from '../../utils/theme';

interface Props {
  id: number;
  title: string;
  imageCover?: string;
}

const BookDetailsItem: React.FC<Props> = ({ id, title, imageCover }) => {
  const onPress = () => goToScreen('BookDetails', { id, title, url: imageCover });
  const imgSource = imageCover
    ? { uri: imageCover }
    : require('../../assets/images/placeholder.png');

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageFrame}>
        <Image source={imgSource} style={styles.image} />
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
