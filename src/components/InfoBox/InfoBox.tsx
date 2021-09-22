import React from 'react';

import { Image, View } from 'react-native';
import Typography from '../Typography';
import styles from './styles';

interface Props {
  cover: Book['book_covers'][0]['URL'];
  author: Book['author'];
  publishDate: Book['publish_date'][0]['UK'];
  plot: Book['plot_take_place_years'];
}

const InfoBox = ({ cover, author, publishDate, plot }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: cover }} style={styles.imageView} />
      <View style={styles.infoBlock}>
        <View style={styles.infoData}>
          <Typography variant="bold">Author: </Typography>
          <Typography variant="regular">{author}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Publish Date: </Typography>
          <Typography variant="regular">{publishDate}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Plot Take-place years: </Typography>
          <Typography variant="regular">{plot}</Typography>
        </View>
      </View>
    </View>
  );
};
InfoBox.defaultProps = {
  textSize: 10,
};
export default InfoBox;
