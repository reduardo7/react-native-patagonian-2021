import React from 'react';

import { Image, View } from 'react-native';
import Typography from '../Typography';
import styles from './styles';

interface Props {
  species: Character['species'];
  gender: Character['gender'];
  house: Character['house'];
}

const InfoBoxCharacter = ({ species, gender, house }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: '../../assets/images/silueta.jpg' }} style={styles.imageView} />
      <View style={styles.infoBlock}>
        <View style={styles.infoData}>
          <Typography variant="bold">Species: </Typography>
          <Typography variant="regular">{species}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Gender: </Typography>
          <Typography variant="regular">{gender}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">House: </Typography>
          <Typography variant="regular">{house}</Typography>
        </View>
      </View>
    </View>
  );
};
InfoBoxCharacter.defaultProps = {
  textSize: 10,
};
export default InfoBoxCharacter;
