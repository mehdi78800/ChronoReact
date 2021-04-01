import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStore } from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen'
import ChronoScreen from './screens/ChronoScreen'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

// Définition de la navigation pour votre application 
// Notez que initialRouteName définit la page par défaut 
// quand l'application se charge

// Vous devez définir un wraper NavigationContainer puis 
// utilisez les composants Stack.Navigator et Stack.Screen
// pour définir les éléments de navigation
const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chrono') {
              iconName = focused ? 'timer' : 'timer-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',

          // labelStyle: {
          //   fontSize: 30,
          //   paddingBottom: 10
          // },

          style: {
            height: 70,
            paddingBottom: 10,
            backgroundColor: "white"
          },

        }}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chrono" component={ChronoScreen} />
      </Tab.Navigator>
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
