import React from 'react';
import {TextWrapper} from './Text.styles';
import PropTypes from 'prop-types';

const Text = ({
  fontSize,
  fontWeight,
  align,
  marginTop,
  lineHeight,
  color,
  children,
}) => {
  return (
    <TextWrapper
      marginTop={marginTop}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      color={color}
      align={align}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  fontWeight: PropTypes.string,
  align: PropTypes.string,
  marginTop: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  fontSize: 16,
  lineHeight: 18,
  fontWeight: '100',
  align: 'left',
  marginTop: 0,
  color: 'black',
  children: null,
};

export default Text;
