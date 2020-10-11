/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import HomeStack from './src/navigations/HomeStack';
import MainTab from './src/navigations/MainTab';
import {client} from './service';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  console.log('HERE', Platform.OS)
  return (
    <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  box: { 
    height: 200, 
  },
  red: { 
    backgroundColor: 'red' 
  },
  blue: { 
    backgroundColor: 'blue' 
  }
});

export default App;