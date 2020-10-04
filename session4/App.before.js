/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigations/AppNavigator';
import {ApolloProvider} from '@apollo/client';
import client from './src/services';

import 'react-native-gesture-handler';

const App = () => {
  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>
  );
};

export default App;
