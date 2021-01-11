import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {PreLoginStack} from './navigators';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <PreLoginStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
