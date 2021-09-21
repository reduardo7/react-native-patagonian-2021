import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header, SearchBar, SectionSubtitle, Typography } from '../../components';
import { getAllCharacters, getCharactersByName } from '../../services';

import { goToScreen } from '../../navigation/controls';
import styles from './styles';

import gryffindorLogo from '../../assets/images/gryffindor.jpg';
import hufflepuffLogo from '../../assets/images/hufflepuff.jpg';
import ravenclawLogo from '../../assets/images/ravenclaw.jpg';
import slytherinLogo from '../../assets/images/slytherin.jpg';

const CharactersScreen = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCharactersData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getAllCharacters();
      if (success) {
        setCharacters(data);
      } else {
        Alert.alert('Error getting book information.');
      }
    } catch (error) {
      console.log('Error getting book information', error);
      Alert.alert('Error getting book information');
    } finally {
      setLoading(false);
    }
  };

  const getCharactersName = async (name: string) => {
    setLoading(true);
    try {
      const { success, data } = await getCharactersByName(name);
      if (success) {
        setCharacters(data);
      } else {
        console.log('Error getting book information.');
      }
    } catch (error) {
      console.log('Error getting book information', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  return (
    <>
      <Header />
      <View style={styles.sectionContent}>
        <SearchBar onChange={getCharactersName} placeholder="Search a Character" />
        <SectionSubtitle text="CHARACTERS" />
        {loading ? (
          <View style={styles.wholeScreenCenter}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={styles.cardListContainer}>
            <FlatList data={characters} renderItem={renderItem} />
          </View>
        )}
      </View>
    </>
  );
};

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.rowCard}
      onPress={() => goToScreen('CharacterDetails', { id: item.id, title: item.name })}
    >
      {item.house ? (
        <Image style={styles.rowImage} source={houseLogos[item.house]} />
      ) : (
        <View style={styles.rowImage} />
      )}
      <View style={styles.rowText}>
        <Typography size={18}>{item.name}</Typography>
        <Typography size={14}>{item.associated_groups ? item.associated_groups[0] : ''}</Typography>
      </View>
    </TouchableOpacity>
  );
};

const houseLogos = {
  Gryffindor: gryffindorLogo,
  Ravenclaw: ravenclawLogo,
  Slytherin: slytherinLogo,
  Hufflepuff: hufflepuffLogo,
};

export default CharactersScreen;
