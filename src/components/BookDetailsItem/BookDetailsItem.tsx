import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';

interface Props {
  id: number;
  title: string;
}

const BookDetailsItem: React.FC<Props> = ({ id, title }) => {
  const onPress = () => goToScreen('BookDetails', { id, title });

  return (
    <TouchableOpacity style={styles.listItemContainerShadow} onPress={onPress}>
      <View style={styles.listItemContainer}>
        <Typography numberOfLines={2} align="center">
          {title}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default BookDetailsItem;
