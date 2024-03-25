import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { recipes } from '../data/recipes';
import { createStackNavigator } from '@react-navigation/stack';


const RecipeScreen = () => {
    return (
      <ScrollView style={styles.container}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  
  export default RecipeScreen;