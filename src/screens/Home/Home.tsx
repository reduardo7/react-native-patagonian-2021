import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import styles from './styles';
import { DefaultButton, Header, Separator, Typography } from '../../components';
import { getAllBooks } from '../../services';
import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';

const ListItem = ({ id, title }: { id: number; title: string }) => (
  <TouchableOpacity
    onPress={() => goToScreen('BookDetails', { id, title })}
    style={styles.listItemContainerShadow}
  >
    <View style={styles.listItemContainer}>
      <Typography numberOfLines={2} align="center">
        {title}
      </Typography>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} />
);

export const COMPONENT_NAME = 'Home';

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const netInfo = useNetInfo();

  const getBooksData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        setBooks(data);
      } else {
        Alert.alert('Error getting books on Home Screen');
      }
    } catch (error) {
      console.log('Error getting books on Home Screen', error);
      Alert.alert('Error getting books on Home Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Home Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="Home Screen" />
      <View style={styles.mainContainer}>
        <Separator size={20} />
        <DefaultButton text="Go To ... Screen" onPress={() => {}} />
        <Separator size={20} />
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={getBooksData}
          data={books}
          renderItem={renderFlatlistItem}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistContent}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default HomeScreen;
