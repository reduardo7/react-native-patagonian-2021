import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import styles from './styles';
import { Separator, Header, SectionSubTitle, HistoryItem } from '../../components';
import { colors } from '../../utils/theme';
import TextInputIcon from '../../components/TextInputIcon';
import { IIF } from '../../utils/IF';
import HistoryStorage, { HistoryEntry } from '../../utils/HistoryStorage';
import { useFocusEffect } from '@react-navigation/native';

const flatlistKeyExtractor = (item: HistoryEntry) => `${item.timestamp}`;

const renderFlatlistItem = ({ item }: { item: HistoryEntry }) => {
  return (
    <HistoryItem
      id={item.params.id}
      title={item.params.title}
      time={item.timestamp}
      imageCover={item.params.url}
      type={item.type}
    />
  );
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
        console.error('Error getting history data:', err);
        Alert.alert('Error getting history data');
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
