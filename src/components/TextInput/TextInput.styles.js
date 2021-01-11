import styled from 'styled-components/native';
import Text from '../Text';
import * as COLORS from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const LeftWrapper = styled.View`
  justify-content: flex-end;
  padding-bottom: 10px;
`;

export const RightWrapper = styled.View`
  justify-content: flex-end;
  padding-bottom: 10px;
`;

export const InputWrapper = styled.View`
  flex: 1;
  border-bottom-color: ${COLORS.lightBlue};
  border-bottom-width: 1px;
`;

export const RNTextInput = styled.TextInput``;

export const Label = styled(Text)``;
