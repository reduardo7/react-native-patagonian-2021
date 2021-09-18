import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import styles from './styles';
import { BookDetailsItem, Separator, Typography } from '../../components';
import { Books } from '../../services';
import { colors } from '../../utils/theme';
import TextInputIcon from '../../components/TextInputIcon';
import { IIF } from '../../utils/IF';

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <BookDetailsItem id={item.id} title={item.title} />
);

export const COMPONENT_NAME = 'Home';

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');

  const netInfo = useNetInfo();

  const getBooksData = async (search: string = '') => {
    setLoading(true);

    try {
      const { data } = await Books.search(search);
      setBooks(data);
    } catch (error) {
      Alert.alert('Error getting books on Home Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData(inputText);
  }, [inputText]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <Separator size={20} />
        <TextInputIcon placeholder="Search a book" value={inputText} onChangeText={setInputText} />
        <Separator size={20} />
        {IIF(loading)
          .THEN(
            <ActivityIndicator size="large" style={styles.flatList} color={colors.mainOrange} />,
          )
          .ELSE(
            <FlatList
              keyExtractor={flatlistKeyExtractor}
              refreshing={loading}
              onRefresh={getBooksData}
              data={books}
              renderItem={renderFlatlistItem}
              ItemSeparatorComponent={Separator}
              contentContainerStyle={styles.flatlistContent}
              style={styles.flatList}
            />,
          )}
      </View>
    </>
  );
};

export default HomeScreen;
