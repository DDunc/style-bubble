'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n all: ', ';\n * {\n  all: ', ';   \n } \n'], ['\n all: ', ';\n * {\n  all: ', ';   \n } \n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleBubble = _styledComponents2.default.div(_templateObject, function (props) {
  return props.resetType;
}, function (props) {
  return props.resetType;
});

// see https://developer.mozilla.org/en-US/docs/Web/CSS/all
StyleBubble.propTypes = {
  resetType: _propTypes2.default.oneOf(['initial', 'inherit', 'unset'])
};

StyleBubble.defaultProps = {
  resetType: 'initial'
};

exports.default = StyleBubble;