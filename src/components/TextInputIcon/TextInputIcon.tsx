import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useDebounce } from 'use-debounce';
import styles from './styles';

interface Props {
  /**
   * Initial value.
   */
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  icon?: 'search';
}

const TextInputIcon: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder = '',
  icon = 'search',
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [newValue] = useDebounce(inputValue, 1000);

  useEffect(() => onChangeText(newValue), [newValue, onChangeText]);

  return (
    <View style={styles.searchSection}>
      <MaterialIcon name={icon} style={styles.searchIcon} size={20} color="#7F0909" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        defaultValue={value}
        onChangeText={setInputValue}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default TextInputIcon;
