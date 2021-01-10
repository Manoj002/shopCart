import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const AppContainer = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppContainer;
