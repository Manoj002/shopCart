import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PreLoginStack} from './navigators';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <PreLoginStack />
    </NavigationContainer>
  );
};

export default App;
