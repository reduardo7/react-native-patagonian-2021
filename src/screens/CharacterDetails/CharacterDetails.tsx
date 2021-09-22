import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import styles from './styles';
import { Header, InfoBoxCharacter, Separator, TitleBoxCharacter } from '../../components';
import { Characters } from '../../services';
import { colors } from '../../utils/theme';
import HistoryStorage from '../../utils/HistoryStorage';

export type RouteParams = Pick<Character, 'id' | 'name'>;

export type Route = RouteProp<Record<string, RouteParams>, string>;

export const COMPONENT_NAME = 'CharacterDetails';

const CharacterDetailsScreen = ({ route }: { route: Route }) => {
  const { id, name } = route.params;

  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCharactersData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await Characters.getById(id);
      setCharacter(data);
    } catch (error) {
      Alert.alert(`Error getting the details of the character: ${name}`);
    } finally {
      setLoading(false);
    }
  }, [id, name]);

  useEffect(() => {
    HistoryStorage.put({ id, title: name });
    getCharactersData();
  }, [getCharactersData, id, name]);

  if (loading || !character) {
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
          <TitleBoxCharacter name={character.name} textSize={25} />
          <Separator size={20} />
          <InfoBoxCharacter
            species={character.species}
            gender={character.gender}
            house={character.house}
          />
          <Separator size={20} />
        </View>
      </ScrollView>
    </>
  );
};

export default CharacterDetailsScreen;
