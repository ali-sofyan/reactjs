import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
const DATA = [
  {
    id: 1,
    name: 'Nasi goreng',
    price: 50000,
  },
  {
    id: 2,
    name: 'Teh obeng',
  },
  {
    id: 3,
    name: 'Mie goreng',
  },
];
const styles = StyleSheet.create({
  frameItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: 'red',
  },
  textItem: {
    color: 'white',
  },
});
const Beranda = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.frameItem]}>
        <Text style={[styles.textItem]}>{item.name}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};
export default Beranda;