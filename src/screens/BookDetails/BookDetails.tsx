import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import styles from './styles';
import { DescriptionBox, Header, InfoBox, Separator, TitleBox } from '../../components';
import { Books } from '../../services';
import { colors } from '../../utils/theme';
import HistoryStorage from '../../utils/HistoryStorage';

export type RouteParams = Pick<Book, 'id' | 'title'> & {
  url?: string;
};

export type Route = RouteProp<Record<string, RouteParams>, string>;

export const COMPONENT_NAME = 'BookDetails';

const BookDetailsScreen = ({ route }: { route: Route }) => {
  const { id, title, url } = route.params;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getBooksData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await Books.getById(id);
      setBook(data);
    } catch (error) {
      Alert.alert(`Error getting the details of the book: ${title}`);
    } finally {
      setLoading(false);
    }
  }, [id, title]);

  useEffect(() => {
    HistoryStorage.put('book', { id, title, url });
    getBooksData();
  }, [getBooksData, id, title, url]);

  if (loading || !book) {
    return (
      <>
        <Header />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header />
      <Separator size={60} />

      <ScrollView>
        <View style={styles.mainContainer}>
          <TitleBox title={book.title} textSize={25} />
          <Separator size={20} />
          <InfoBox
            cover={book.book_covers[0].URL}
            author={book.author}
            publishDate={book.publish_date[0].UK}
            plot={book.plot_take_place_years}
          />
          <Separator size={20} />
          <DescriptionBox description="Sinopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis erat, euismod ac mi nec, faucibus fermentum neque. Ut posuere commodo libero tempus scelerisque. Duis tempus, tellus eu volutpat pretium, lectus ligula lobortis diam, ac elementum neque sem ut ligula. Vivamus volutpat feugiat augue, vel laoreet sapien tempor at. Duis sed scelerisque felis. Donec sagittis tellus nisl, in egestas metus suscipit nec. Mauris scelerisque nisl diam, eu aliquam ipsum egestas ut. Mauris fermentum ipsum eget magna fringilla, eget efficitur odio sollicitudin. Curabitur porttitor augue quis elementum vulputate." />
          <Separator size={20} />
        </View>
      </ScrollView>
    </>
  );
};

export default BookDetailsScreen;
