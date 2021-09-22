import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';
import { CustomText } from '..';
import { colors } from '../../utils/theme';
import { formatDate } from '../../utils/date';

interface Props {
  id: number;
  title: string;
  time: Date;
  imageCover?: string;
}

const HistoryItem: React.FC<Props> = ({ id, title, time, imageCover }) => {
  const timeStr = formatDate(time);

  const onPress = () => goToScreen('BookDetails', { id, title, url: imageCover });

  const imgSource = imageCover
    ? { uri: imageCover }
    : require('../../assets/images/placeholder.png');

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageFrame}>
        <Image source={imgSource} style={styles.image} />
      </View>
      <CustomText size={16} align="center" color={colors.darkRed} variant="bold">
        {title}
      </CustomText>
      <CustomText size={14} align="center" color={colors.mainOrange}>
        {timeStr}
      </CustomText>
    </TouchableOpacity>
  );
};

export default HistoryItem;
