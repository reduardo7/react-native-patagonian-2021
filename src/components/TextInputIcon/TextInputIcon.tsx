import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  icon?: string;
}

const TextInputIcon = ({ value, onChangeText, placeholder, icon = 'search' }: Props) => {
  return (
    <View style={styles.searchSection}>
      <MaterialIcon name={icon} style={styles.searchIcon} size={20} color="#000" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default TextInputIcon;
