import styled from 'styled-components/native';
import {Image} from 'react-native';
import Text from '../../components/Text';
import * as COLORS from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const Header = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled(Image)`
  margin-left: 20px;
`;

export const SkipButtonWrapper = styled.View`
  flex: 1;
  padding-right: 20px;
`;

export const SkipButton = styled(Text)``;

export const SignInText = styled(Text)`
  flex: 0.1;
`;

export const EmailRowWrapper = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  background: red;
`;

export const EmailWrapper = styled(LogoWrapper)`
  margin-left: 0px;
`;
