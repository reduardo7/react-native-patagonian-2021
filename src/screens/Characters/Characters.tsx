import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import styles from './styles';
import {
  CharacterDetailsItem,
  Separator,
  Typography,
  SectionSubTitle,
  Header,
} from '../../components';
import { Characters } from '../../services';
import { colors } from '../../utils/theme';
import TextInputIcon from '../../components/TextInputIcon';
import { IIF } from '../../utils/IF';

const flatlistKeyExtractor = (item: Character) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Character }) => {
  return <CharacterDetailsItem id={item.id} name={item.name} />;
};

export const COMPONENT_NAME = 'Characters';

const CharactersScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');

  const netInfo = useNetInfo();

  const getCharactersData = async (search: string = '') => {
    setLoading(true);

    try {
      const { data } = await Characters.search(search);
      setCharacters(data);
    } catch (error) {
      Alert.alert('Error getting characters on Characters Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersData(inputText);
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
      <Header />
      <View style={styles.mainContainer}>
        <Separator size={70} />
        <TextInputIcon
          placeholder="Search a character"
          value={inputText}
          onChangeText={setInputText}
        />
        <Separator size={20} />
        <SectionSubTitle text="CHARACTERS" />

        {IIF(loading)
          .THEN(
            <ActivityIndicator size="large" style={styles.flatList} color={colors.mainOrange} />,
          )
          .ELSE(
            <FlatList
              numColumns={2}
              keyExtractor={flatlistKeyExtractor}
              refreshing={loading}
              onRefresh={getCharactersData}
              data={characters}
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

export default CharactersScreen;
