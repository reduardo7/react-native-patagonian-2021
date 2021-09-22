import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import styles from './styles';
import { Header, Separator, Typography } from '../../components';
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
    HistoryStorage.put({ id, title, url });
    getBooksData();
  }, [getBooksData, id, title, url]);

  if (loading) {
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
      <View style={styles.mainContainer}>
        <Separator size={70} />
        <Typography>{JSON.stringify(book, null, 2)}</Typography>
      </View>
    </>
  );
};

export default BookDetailsScreen;
