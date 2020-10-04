/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {VirtualizedList, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

const App = () => {
  const DATA = [];

  const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`,
    };
  };

  const getItemCount = (data) => {
    return 50;
  };

  const Item = ({title}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={(item) => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

export default App;
