import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen'
import ChronoScreen from './screens/ChronoScreen'

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();

// Définition de la navigation pour votre application 
// Notez que initialRouteName définit la page par défaut 
// quand l'application se charge

// Vous devez définir un wraper NavigationContainer puis 
// utilisez les composants Stack.Navigator et Stack.Screen
// pour définir les éléments de navigation
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chrono" component={ChronoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const store = createStore(reducer);


const App = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
