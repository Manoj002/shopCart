import styled from 'styled-components/native';

export const TextWrapper = styled.Text`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.marginTop}px;
  line-height: ${(props) => props.lineHeight}px;
  color: ${(props) => props.color};
`;
