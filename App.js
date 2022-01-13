import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens';
import { Main } from './src/navigation';


const App = () => {


  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
};

export default App;
