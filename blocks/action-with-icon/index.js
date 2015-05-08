'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _action = require('../action');

var _action2 = _interopRequireDefault(_action);

var _style = require('./style');

var baseStyle = _interopRequireWildcard(_style);

var _image = require('../image');

var _image2 = _interopRequireDefault(_image);

var _text = require('../text');

var _text2 = _interopRequireDefault(_text);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ActionWithIconBlock = (function (_React$Component) {
  function ActionWithIconBlock() {
    _classCallCheck(this, ActionWithIconBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ActionWithIconBlock, _React$Component);

  _createClass(ActionWithIconBlock, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _action2['default'],
        { href: this.props.href, style: _extends({}, baseStyle.action, this.props.style) },
        _react2['default'].createElement(_image2['default'], { src: this.props.src, style: _extends({}, baseStyle.image) }),
        _react2['default'].createElement(_text2['default'], { style: _extends({}, baseStyle.text), text: this.props.title })
      );
    }
  }]);

  return ActionWithIconBlock;
})(_react2['default'].Component);

exports['default'] = ActionWithIconBlock;

ActionWithIconBlock.propTypes = {
  href: _react2['default'].PropTypes.string.isRequired,
  title: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object
};
module.exports = exports['default'];