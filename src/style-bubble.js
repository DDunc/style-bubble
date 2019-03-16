import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyleBubble = styled.div`
 all: ${props => props.resetType};
 * {
  all: ${props => props.resetType};   
 } 
`;

// see https://developer.mozilla.org/en-US/docs/Web/CSS/all
StyleBubble.propTypes = {
  resetType: PropTypes.oneOf(['initial', 'inherit', 'unset'])
};

StyleBubble.defaultProps = {
  resetType: 'initial'
};

export default StyleBubble;