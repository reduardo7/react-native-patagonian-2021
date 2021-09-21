import React from 'react';
import { FlatList, View } from 'react-native';
import { ItemCard } from '..';
export type Props = {
  data: {
    title: string;
    image: string;
  };
  horizontal?: boolean;
  numberOfColumns?: number;
};

const getCardStyle = (numColumns: number) => {
  return {
    flex: 1 / numColumns,
    paddingHorizontal: 5,
    paddingVertical: 10,
  };
};

const CardBooks = (props: Props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={getCardStyle(props.numberOfColumns ? props.numberOfColumns : 1)}>
        <ItemCard title={item.title} image={item.image} onPress={item.onPress} />
      </View>
    );
  };
  return (
    <FlatList
      data={props.data}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      horizontal={props.horizontal}
      numColumns={!props.horizontal ? props.numberOfColumns : undefined}
    />
  );
};

CardBooks.defaultProps = {
  numberOfColumns: undefined,
  horizontal: false,
};

export default CardBooks;
