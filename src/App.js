import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PreLoginStack} from './navigators';

const App = () => {
  return (
    <NavigationContainer>
      <PreLoginStack />
    </NavigationContainer>
  );
};

export default App;
