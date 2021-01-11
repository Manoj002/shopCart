import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Header,
  LogoWrapper,
  SkipButton,
  SkipButtonWrapper,
  SignInText,
  EmailRowWrapper,
  EmailWrapper,
} from './SignIn.styles';
import * as COLORS from '../../utils/colors';

const Logo = require('../../../assets/images/Logo.png');
const Email = require('../../../assets/images/Email.png');
const Lock = require('../../../assets/images/Lock.png');

const SignIn = () => {
  useEffect(() => {
    AsyncStorage.getItem('login_token')
      .then(() => {})
      .catch(() => {})
      .finally(() => {});
  }, []);

  return (
    <Container>
      <Header>
        <LogoWrapper source={Logo} />
        <SkipButtonWrapper>
          <SkipButton align="right" color={COLORS.grey}>
            Skip
          </SkipButton>
        </SkipButtonWrapper>
      </Header>
      <SignInText fontSize={24} lineHeight={26} align="center">
        Sign In
      </SignInText>
      <EmailRowWrapper>
        <EmailWrapper source={Email} />
      </EmailRowWrapper>
    </Container>
  );
};

export default SignIn;
