import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  Container,
  ShoppingImage,
  TitleWrapper,
  HandleBar,
  DescriptionWrapper,
  Description,
  GetStartedButton,
} from './Information.styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import * as COLORS from '../../utils/colors';

const Shopping = require('../../../assets/images/Shopping.png');
const WIDTH = Dimensions.get('screen').width;

const Information = ({navigation}) => {
  useEffect(() => {}, []);

  const handleOnPress = () => navigation.navigate('SignIn', {Screen: 'SignIn'});

  return (
    <Container>
      <ShoppingImage source={Shopping} />
      <TitleWrapper>
        <Text fontSize={24} lineHeight={30} align="center">
          Welcome to{' '}
          <Text fontSize={24} lineHeight={30} fontWeight="bold">
            Shop cart
          </Text>
        </Text>
        <HandleBar />
      </TitleWrapper>
      <DescriptionWrapper>
        <Description lineHeight={24} align="center">
          Each online store has it's own store and bag, but if you want to go
          shopping in multiple places at once, so you only have one bag.
        </Description>
      </DescriptionWrapper>
      <GetStartedButton>
        <Button
          width={WIDTH}
          activeOpacity={0.6}
          onPress={handleOnPress}
          title="GET STARTED"
          titleColor={COLORS.white}
          fontSize={18}
          lineHeight={20}
          fontWeight="bold"
          backgroundColor={COLORS.lightBlue}
        />
      </GetStartedButton>
    </Container>
  );
};

export default Information;
