import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import styles from './styles';
import { BookDetailsItem, Separator, Header, SectionSubTitle } from '../../components';
import { colors } from '../../utils/theme';
import TextInputIcon from '../../components/TextInputIcon';
import { IIF } from '../../utils/IF';
import HistoryStorage, { HistoryEntry } from '../../utils/HistoryStorage';
import { formatDate } from '../../utils/date';
import { useFocusEffect } from '@react-navigation/native';

const flatlistKeyExtractor = (item: HistoryEntry) => `${item.timestamp}`;

const renderFlatlistItem = ({ item }: { item: HistoryEntry }) => {
  const title = `${item.params.title}\n(${formatDate(item.timestamp)})`;
  return <BookDetailsItem id={item.params.id} title={title} />;
};

export const COMPONENT_NAME = 'History';

const HistoryScreen = () => {
  const [historyItems, setHistoryItems] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');

  const getBooksData = useCallback(() => {
    setLoading(true);

    HistoryStorage.search(inputText)
      .then((data) => setHistoryItems(data))
      .catch((err) => {
        console.error('Error getting books on Home Screen:a', err);
        Alert.alert('Error getting books on Home Screen');
      })
      .finally(() => setLoading(false));
  }, [inputText]);

  useFocusEffect(getBooksData);

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <Separator size={70} />
        <TextInputIcon
          placeholder="Search a book in the history"
          value={inputText}
          onChangeText={setInputText}
        />
        <Separator size={20} />
        <SectionSubTitle text="HISTORY" />
        {IIF(loading)
          .THEN(
            <ActivityIndicator size="large" style={styles.flatList} color={colors.mainOrange} />,
          )
          .ELSE(
            <FlatList
              keyExtractor={flatlistKeyExtractor}
              refreshing={loading}
              onRefresh={getBooksData}
              data={historyItems}
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

export default HistoryScreen;
