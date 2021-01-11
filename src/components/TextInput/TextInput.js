import React from 'react';
import {
  Container,
  RNTextInput,
  LeftWrapper,
  RightWrapper,
  InputWrapper,
  Label,
} from './TextInput.styles';
import PropTypes from 'prop-types';
import * as COLORS from '../../utils/colors';

const TextInput = ({value, label, onChangeText, left, right}) => {
  const [defaultValue, setDefaultValue] = React.useState(value);

  const handleOnChange = (e) => {
    setDefaultValue(e.nativeEvent.target);
    onChangeText(e.nativeEvent.target);
  };

  return (
    <Container>
      <If condition={left}>
        <LeftWrapper>{left}</LeftWrapper>
      </If>
      <InputWrapper>
        <Label
          fontSize={12}
          color={COLORS.grey}
          style={{position: 'absolute', top: -10, zIndex: 1}}>
          {label}
        </Label>
        <RNTextInput value={defaultValue} onChange={handleOnChange} />
      </InputWrapper>
      <If condition={right}>
        <RightWrapper>{right}</RightWrapper>
      </If>
    </Container>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
  onChangeText: PropTypes.func,
};

TextInput.defaultProps = {
  value: '',
  label: 'Label',
  left: null,
  right: null,
  onChangeText: () => {},
};

export default TextInput;
