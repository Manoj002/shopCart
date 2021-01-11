import React from 'react';
import {Container, Title} from './Button.styles';
import PropTypes from 'prop-types';
import * as COLORS from '../../utils/colors';

const Button = ({
  rounded,
  title,
  width,
  titleColor,
  backgroundColor,
  onPress,
  ...props
}) => {
  return (
    <Container
      activeOpacity={0.6}
      onPress={onPress}
      width={width}
      rounded={rounded}
      backgroundColor={backgroundColor}
      {...props}>
      <Title color={titleColor}>{title}</Title>
    </Container>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  width: PropTypes.number,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  rounded: false,
  width: 200,
  title: 'custom',
  titleColor: COLORS.black,
  backgroundColor: COLORS.lightBlue,
  onPress: () => {},
};

export default Button;
