import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
// import { goToScreen } from '../../navigation/controls';
import { CustomText } from '..';
import { colors } from '../../utils/theme';

interface Props {
  id: number;
  title: string;
  imageCover?: string;
}

const BookDetailsItem: React.FC<Props> = ({ title, imageCover }) => {
  // const onPress = () => goToScreen('BookDetails', { id, title });

  return (
    <View style={styles.cardContainer}>
      {imageCover && imageCover !== '' ? (
        <>
          <View style={styles.imageFrame}>
            <Image source={{ uri: imageCover }} style={styles.image} />
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
        </>
      ) : (
        <>
          <View style={styles.imageFrame}>
            <Image
              source={require('../../assets/images/placeholder.png')}
              style={styles.placeholderImage}
            />
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
        </>
      )}
    </View>
  );
};

export default BookDetailsItem;
