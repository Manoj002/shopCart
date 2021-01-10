import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)``;
