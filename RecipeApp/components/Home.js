import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipeScreen from './RecipeScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} options={{ title: 'Recipe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('RecipeScreen')}>
        <Image source={require('../assets/central-icon.png')} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});

export default HomeNavigator;