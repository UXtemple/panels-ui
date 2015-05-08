'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var baseStyle = _interopRequireWildcard(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ActionBlock = (function (_React$Component) {
  function ActionBlock(props) {
    _classCallCheck(this, ActionBlock);

    _get(Object.getPrototypeOf(ActionBlock.prototype), 'constructor', this).call(this, props);
    this.state = {
      active: false,
      hover: false
    };
  }

  _inherits(ActionBlock, _React$Component);

  _createClass(ActionBlock, [{
    key: 'onClick',
    value: function onClick(event) {
      event.preventDefault();
      this.setState({ active: !this.state.active });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = _extends({}, baseStyle.base, this.props.style);
      if (this.state.active || this.state.hover) {
        style = _extends({}, style, baseStyle.active);
      }

      return _react2['default'].createElement(
        'a',
        { href: this.props.href, title: this.props.title, style: style,
          onClick: this.onClick.bind(this),
          onMouseEnter: function () {
            return _this2.setState({ hover: true });
          },
          onMouseLeave: function () {
            return _this2.setState({ hover: false });
          } },
        this.props.children || this.props.title
      );
    }
  }]);

  return ActionBlock;
})(_react2['default'].Component);

exports['default'] = ActionBlock;

ActionBlock.propTypes = {
  href: _react2['default'].PropTypes.string.isRequired,
  title: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object
};
module.exports = exports['default'];