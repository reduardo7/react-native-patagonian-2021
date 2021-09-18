import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import styles from './styles';
import { BookDetailsItem, Separator, Typography } from '../../components';
import { colors } from '../../utils/theme';
import TextInputIcon from '../../components/TextInputIcon';
import { IIF } from '../../utils/IF';
import HistoryStorage, { HistoryEntry } from '../../utils/HistoryStorage';

const flatlistKeyExtractor = (item: HistoryEntry) => `${item.params.id}`;

const renderFlatlistItem = ({ item }: { item: HistoryEntry }) => (
  <BookDetailsItem id={item.params.id} title={item.params.title} />
);

export const COMPONENT_NAME = 'History';

const HistoryScreen = () => {
  const [historyItems, setHistoryItems] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');

  const netInfo = useNetInfo();

  const getBooksData = async (search: string = '') => {
    setLoading(true);

    try {
      const data = await HistoryStorage.search(search);
      setHistoryItems(data);
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
        <TextInputIcon
          placeholder="Search a book in the history"
          value={inputText}
          onChangeText={setInputText}
        />
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
