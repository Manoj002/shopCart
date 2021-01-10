import React from 'react';
import {TextWrapper} from './Text.styles';
import PropTypes from 'prop-types';

const Text = ({children}) => {
  return <TextWrapper>{children}</TextWrapper>;
};

Text.propTypes = {
  children: PropTypes.node,
};

Text.defaultProps = {
  children: null,
};

export default Text;
