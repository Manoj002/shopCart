import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/Sign';
import Splash from '../screens/Splash';
import Information from '../screens/Information';
import {PostLoginStack} from '../navigators';

const AppContainer = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="PostLoginStack"
        component={PostLoginStack}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppContainer;
