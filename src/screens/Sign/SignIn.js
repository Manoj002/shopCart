import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container} from './SignIn.styles';
import Text from '../../components/Text';

const SignIn = () => {

  useEffect(() => {
    AsyncStorage.getItem('login_token')
      .then(() => {

      })
      .catch(() => {

      })
      .finally(() => {

      });
  }, []);

  return (
    <Container>
      <Text>SignIn</Text>
    </Container>
  );
};

export default SignIn;
