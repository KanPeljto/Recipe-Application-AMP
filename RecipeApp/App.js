import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import HomeNavigator from './components/Home';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;