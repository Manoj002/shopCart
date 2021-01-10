import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {ImageBackgroundWrapper} from './Splash.styles';

const SplashImage = require('../../../assets/images/Splash.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    let timer = () =>
      setTimeout(() => {
        navigation.navigate('Information', {Screen: 'Information'});
      }, 2000);
    timer();
    clearTimeout(timer);
  });

  return (
    <ImageBackgroundWrapper>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={SplashImage}
      />
    </ImageBackgroundWrapper>
  );
};

export default Splash;
