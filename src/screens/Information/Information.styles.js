import styled from 'styled-components/native';
import {Image} from 'react-native';
import Text from '../../components/Text';
import * as COLORS from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
`;

export const ShoppingImage = styled(Image)`
  flex: 0.6;
`;

export const TitleWrapper = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`;

export const HandleBar = styled.View`
  height: 2px;
  width: 50px;
  border-radius: 1px;
  margin-top: 8px;
  background-color: ${COLORS.lightGreen};
`;

export const DescriptionWrapper = styled.View`
  flex: 0.2;
  padding-horizontal: 2px;
`;

export const Description = styled(Text)`
  flex: 1;
`;

export const GetStartedButton = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.lightBlue};
`;
