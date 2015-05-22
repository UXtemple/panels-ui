(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _index = require('../../index');

var PanelsUi = _interopRequireWildcard(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

window.Playground = {
  PanelsUi: PanelsUi,
  React: _react2['default']
};

var blocks = PanelsUi.blocks;
var Panel = PanelsUi.Panel;
var Panels = PanelsUi.Panels;

var ActionBlock = blocks.ActionBlock;
var ActionWithIconBlock = blocks.ActionWithIconBlock;
var ImageBlock = blocks.ImageBlock;
var SubtitleBlock = blocks.SubtitleBlock;
var TextBlock = blocks.TextBlock;
var TitleBlock = blocks.TitleBlock;

var SHEEP = 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg';

var actionStyle = {
  base: {
    marginTop: 25,
    backgroundColor: '#F2F2F2',
    color: '#353535'
  },
  active: {
    color: 'blue'
  }
};

var panel1 = _react2['default'].createElement(
  Panel,
  { uri: '/' },
  _react2['default'].createElement(TitleBlock, { title: 'Knock yourself out...', style: { marginTop: 50 } }),
  _react2['default'].createElement(SubtitleBlock, { subtitle: 'With some links...', style: { marginTop: 25 } }),
  _react2['default'].createElement(ActionBlock, { href: 'http://UXtemple.com', title: 'UXtemple', style: actionStyle }),
  _react2['default'].createElement(ActionBlock, { href: 'http://usepanels.com', title: 'use panels', style: actionStyle }),
  _react2['default'].createElement(ActionWithIconBlock, { href: '/some-panel', title: 'This is a sheep', src: SHEEP, style: { marginTop: 25 } }),
  _react2['default'].createElement(SubtitleBlock, { subtitle: 'Or some text and images...', style: { marginTop: 50 } }),
  _react2['default'].createElement(
    TextBlock,
    { style: { marginTop: 25 } },
    'Use panels now :).'
  ),
  _react2['default'].createElement(ImageBlock, { src: SHEEP, style: { marginTop: 25 } }),
  _react2['default'].createElement(
    TextBlock,
    { style: { marginTop: 25 } },
    ' Sheep not included. Unfortunately. :)'
  )
);

var panels = _react2['default'].createElement(
  Panels,
  null,
  panel1
);

_react2['default'].render(panels, document.getElementById('playground-container'));

console.log('Welcome to panels-ui playground.');
console.log('https://ui.usepanels.com');
console.log('Playground module', Playground);

},{"../../index":16,"react":undefined}],2:[function(require,module,exports){
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

},{"../action":4,"../image":6,"../text":12,"./style":3,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var action = {
  flexDirection: 'row'
};
exports.action = action;

var image = {
  borderRadius: 60,
  width: 60,
  height: 60
};
exports.image = image;

var text = {
  alignSelf: 'center',
  flex: 1,
  fontSize: 20,
  marginLeft: 20,
  marginRight: 0
};
exports.text = text;

},{}],4:[function(require,module,exports){
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

      var style = _extends({}, baseStyle.base, this.props.style.base);
      if (this.state.active || this.state.hover) {
        style = _extends({}, style, baseStyle.active, this.props.style.active);
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

ActionBlock.defaultProps = {
  style: {
    base: {},
    active: {}
  }
};
module.exports = exports['default'];

},{"./style":5,"react":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var active = {
  color: 'hsl(0, 50%, 50%)'
};

exports.active = active;

var base = {
  color: 'hsl(0,0%,0%)',
  flexDirection: 'row',
  textDecoration: 'none',
  padding: '15px 0 15px 50px',
  width: '100%'
};

exports.base = base;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ImageTitle = (function (_React$Component) {
  function ImageTitle() {
    _classCallCheck(this, ImageTitle);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ImageTitle, _React$Component);

  _createClass(ImageTitle, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('img', { src: this.props.src, style: _extends({}, _style2['default'], this.props.style) });
    }
  }]);

  return ImageTitle;
})(_react2['default'].Component);

exports['default'] = ImageTitle;

ImageTitle.propTypes = {
  src: _react2['default'].PropTypes.string.isRequired,
  style: _react2['default'].PropTypes.object
};
module.exports = exports['default'];

},{"./style":7,"react":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var style = {
  maxWidth: '100%'
};

exports['default'] = style;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _action = require('./action');

exports.ActionBlock = _interopRequire(_action);

var _actionWithIcon = require('./action-with-icon');

exports.ActionWithIconBlock = _interopRequire(_actionWithIcon);

var _image = require('./image');

exports.ImageBlock = _interopRequire(_image);

var _subtitle = require('./subtitle');

exports.SubtitleBlock = _interopRequire(_subtitle);

var _text = require('./text');

exports.TextBlock = _interopRequire(_text);

var _title = require('./title');

exports.TitleBlock = _interopRequire(_title);

},{"./action":4,"./action-with-icon":2,"./image":6,"./subtitle":10,"./text":12,"./title":14}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var style = {
  marginLeft: 50,
  marginRight: 35
};

exports["default"] = style;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SubtitleBlock = (function (_React$Component) {
  function SubtitleBlock() {
    _classCallCheck(this, SubtitleBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(SubtitleBlock, _React$Component);

  _createClass(SubtitleBlock, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h2',
        { style: _extends({}, _style2['default'], this.props.style) },
        this.props.children || this.props.subtitle
      );
    }
  }]);

  return SubtitleBlock;
})(_react2['default'].Component);

exports['default'] = SubtitleBlock;

SubtitleBlock.propTypes = {
  style: _react2['default'].PropTypes.object,
  subtitle: _react2['default'].PropTypes.string
};
module.exports = exports['default'];

},{"./style":11,"react":undefined}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var base = _extends({}, _style2['default'], {
  fontSize: 20,
  fontWeight: 700,
  textTransform: 'uppercase'
});

exports['default'] = base;
module.exports = exports['default'];

},{"../style":9}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TextBlock = (function (_React$Component) {
  function TextBlock() {
    _classCallCheck(this, TextBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TextBlock, _React$Component);

  _createClass(TextBlock, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'p',
        { style: _extends({}, _style2['default'], this.props.style) },
        this.props.children || this.props.text
      );
    }
  }]);

  return TextBlock;
})(_react2['default'].Component);

exports['default'] = TextBlock;

TextBlock.propTypes = {
  text: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object
};
module.exports = exports['default'];

},{"./style":13,"react":undefined}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var style = _extends({}, _style2['default'], {
  fontSize: 16,
  lineHeight: 1.65
});

exports['default'] = style;
module.exports = exports['default'];

},{"../style":9}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TitleBlock = (function (_React$Component) {
  function TitleBlock() {
    _classCallCheck(this, TitleBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TitleBlock, _React$Component);

  _createClass(TitleBlock, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h1',
        { style: _extends({}, _style2['default'], this.props.style) },
        this.props.children || this.props.title
      );
    }
  }]);

  return TitleBlock;
})(_react2['default'].Component);

exports['default'] = TitleBlock;

TitleBlock.propTypes = {
  style: _react2['default'].PropTypes.object,
  subtitle: _react2['default'].PropTypes.string
};
module.exports = exports['default'];

},{"./style":15,"react":undefined}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var style = _extends({}, _style2['default'], {
  fontWeight: 200
});

exports['default'] = style;
module.exports = exports['default'];

},{"../style":9}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _blocks2 = require('./blocks');

var _blocks = _interopRequireWildcard(_blocks2);

exports.blocks = _blocks;

var _panel = require('./panel');

exports.Panel = _interopRequire(_panel);

var _panels = require('./panels');

exports.Panels = _interopRequire(_panels);

},{"./blocks":8,"./panel":17,"./panels":19}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Panel = (function (_React$Component) {
  function Panel() {
    _classCallCheck(this, Panel);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Panel, _React$Component);

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: _extends({}, _style2['default'], this.props.style) },
        this.props.children
      );
    }
  }]);

  return Panel;
})(_react2['default'].Component);

exports['default'] = Panel;
module.exports = exports['default'];

},{"./style":18,"react":undefined}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var style = {
  alignItems: 'flex-start',
  height: '100vh',
  overflowX: 'auto',
  width: 360
};

exports['default'] = style;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Panels = (function (_React$Component) {
  function Panels() {
    _classCallCheck(this, Panels);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Panels, _React$Component);

  _createClass(Panels, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: _extends({}, _style2['default'], this.props.style) },
        this.props.children
      );
    }
  }]);

  return Panels;
})(_react2['default'].Component);

exports['default'] = Panels;
module.exports = exports['default'];

},{"./style":20,"react":undefined}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var style = {
  flexDirection: 'row',
  height: '100vh'
};

exports['default'] = style;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy11aS9wbGF5Z3JvdW5kL3dlYi9wbGF5Z3JvdW5kLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL2FjdGlvbi13aXRoLWljb24vaW5kZXguZXM2IiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy11aS9ibG9ja3MvYWN0aW9uLXdpdGgtaWNvbi9zdHlsZS5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLXVpL2Jsb2Nrcy9hY3Rpb24vaW5kZXguZXM2IiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy11aS9ibG9ja3MvYWN0aW9uL3N0eWxlLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL2ltYWdlL2luZGV4LmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL2ltYWdlL3N0eWxlLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL2luZGV4LmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL3N0eWxlLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL3N1YnRpdGxlL2luZGV4LmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL3N1YnRpdGxlL3N0eWxlLmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvYmxvY2tzL3RleHQvaW5kZXguZXM2IiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy11aS9ibG9ja3MvdGV4dC9zdHlsZS5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLXVpL2Jsb2Nrcy90aXRsZS9pbmRleC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLXVpL2Jsb2Nrcy90aXRsZS9zdHlsZS5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLXVpL2luZGV4LmVzNiIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL3BhbmVscy9wYW5lbHMtdWkvcGFuZWwvaW5kZXguZXM2IiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvcGFuZWxzL3BhbmVscy11aS9wYW5lbC9zdHlsZS5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLXVpL3BhbmVscy9pbmRleC5lczYiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9wYW5lbHMvcGFuZWxzLXVpL3BhbmVscy9zdHlsZS5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cUJDQTBCLGFBQWE7O0lBQTNCLFFBQVE7O3FCQUNGLE9BQU87Ozs7QUFFekIsTUFBTSxDQUFDLFVBQVUsR0FBRztBQUNsQixVQUFRLEVBQVIsUUFBUTtBQUNSLE9BQUssb0JBQUE7Q0FDTixDQUFDOztJQUVHLE1BQU0sR0FBbUIsUUFBUSxDQUFqQyxNQUFNO0lBQUUsS0FBSyxHQUFZLFFBQVEsQ0FBekIsS0FBSztJQUFFLE1BQU0sR0FBSSxRQUFRLENBQWxCLE1BQU07O0FBQzFCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDckMsSUFBSSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENB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QU07Ozs7Ozs7OztBQ0gzQixJQUFJLEtBQUssR0FBRztBQUNWLGVBQWEsRUFBRSxLQUFLO0FBQ3BCLFFBQU0sRUFBRSxPQUFPO0NBQ2hCLENBQUE7O3FCQUVjLEtBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICogYXMgUGFuZWxzVWkgZnJvbSAnLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcblxud2luZG93LlBsYXlncm91bmQgPSB7XG4gIFBhbmVsc1VpLFxuICBSZWFjdFxufTtcblxubGV0IHtibG9ja3MsIFBhbmVsLCBQYW5lbHN9ID0gUGFuZWxzVWk7XG5sZXQgQWN0aW9uQmxvY2sgPSBibG9ja3MuQWN0aW9uQmxvY2s7XG5sZXQgQWN0aW9uV2l0aEljb25CbG9jayA9IGJsb2Nrcy5BY3Rpb25XaXRoSWNvbkJsb2NrO1xubGV0IEltYWdlQmxvY2sgPSBibG9ja3MuSW1hZ2VCbG9jaztcbmxldCBTdWJ0aXRsZUJsb2NrID0gYmxvY2tzLlN1YnRpdGxlQmxvY2s7XG5sZXQgVGV4dEJsb2NrID0gYmxvY2tzLlRleHRCbG9jaztcbmxldCBUaXRsZUJsb2NrID0gYmxvY2tzLlRpdGxlQmxvY2s7XG5cbmNvbnN0IFNIRUVQID0gJ2h0dHA6Ly9zdGF0aWMuZ3VpbS5jby51ay9zeXMtaW1hZ2VzL0d1YXJkaWFuL1BpeC9waWN0dXJlcy8yMDE0LzQvMTEvMTM5NzIxMDEzMDc0OC9TcHJpbmctTGFtYi4tSW1hZ2Utc2hvdC0yLTAxMS5qcGcnO1xuXG5jb25zdCBhY3Rpb25TdHlsZSA9IHtcbiAgYmFzZToge1xuICAgIG1hcmdpblRvcDogMjUsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0YyRjJGMicsXG4gICAgY29sb3I6ICcjMzUzNTM1J1xuICB9LFxuICBhY3RpdmU6IHtcbiAgICBjb2xvcjogJ2JsdWUnXG4gIH1cbn1cblxubGV0IHBhbmVsMSA9IChcbiAgPFBhbmVsIHVyaT0nLyc+XG4gICAgPFRpdGxlQmxvY2sgdGl0bGU9J0tub2NrIHlvdXJzZWxmIG91dC4uLicgc3R5bGU9e3ttYXJnaW5Ub3A6IDUwfX0gLz5cbiAgICA8U3VidGl0bGVCbG9jayBzdWJ0aXRsZT0nV2l0aCBzb21lIGxpbmtzLi4uJyBzdHlsZT17e21hcmdpblRvcDogMjV9fSAvPlxuICAgIDxBY3Rpb25CbG9jayBocmVmPSdodHRwOi8vVVh0ZW1wbGUuY29tJyB0aXRsZT0nVVh0ZW1wbGUnIHN0eWxlPXthY3Rpb25TdHlsZX0gLz5cbiAgICA8QWN0aW9uQmxvY2sgaHJlZj0naHR0cDovL3VzZXBhbmVscy5jb20nIHRpdGxlPSd1c2UgcGFuZWxzJyBzdHlsZT17YWN0aW9uU3R5bGV9IC8+XG4gICAgPEFjdGlvbldpdGhJY29uQmxvY2sgaHJlZj0nL3NvbWUtcGFuZWwnIHRpdGxlPSdUaGlzIGlzIGEgc2hlZXAnIHNyYz17U0hFRVB9IHN0eWxlPXt7bWFyZ2luVG9wOiAyNX19ICAvPlxuXG4gICAgPFN1YnRpdGxlQmxvY2sgc3VidGl0bGU9J09yIHNvbWUgdGV4dCBhbmQgaW1hZ2VzLi4uJyBzdHlsZT17e21hcmdpblRvcDogNTB9fSAvPlxuICAgIDxUZXh0QmxvY2sgc3R5bGU9e3ttYXJnaW5Ub3A6IDI1fX0+VXNlIHBhbmVscyBub3cgOikuPC9UZXh0QmxvY2s+XG4gICAgPEltYWdlQmxvY2sgc3JjPXtTSEVFUH0gc3R5bGU9e3ttYXJnaW5Ub3A6IDI1fX0gLz5cbiAgICA8VGV4dEJsb2NrIHN0eWxlPXt7bWFyZ2luVG9wOiAyNX19PiBTaGVlcCBub3QgaW5jbHVkZWQuIFVuZm9ydHVuYXRlbHkuIDopPC9UZXh0QmxvY2s+XG4gIDwvUGFuZWw+XG4pO1xuXG5sZXQgcGFuZWxzID0gKFxuICA8UGFuZWxzPlxuICAgIHtwYW5lbDF9XG4gIDwvUGFuZWxzPlxuKTtcblxuUmVhY3QucmVuZGVyKFxuICBwYW5lbHMsXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Z3JvdW5kLWNvbnRhaW5lcicpXG4pO1xuXG5jb25zb2xlLmxvZygnV2VsY29tZSB0byBwYW5lbHMtdWkgcGxheWdyb3VuZC4nKTtcbmNvbnNvbGUubG9nKCdodHRwczovL3VpLnVzZXBhbmVscy5jb20nKTtcbmNvbnNvbGUubG9nKCdQbGF5Z3JvdW5kIG1vZHVsZScsIFBsYXlncm91bmQpO1xuIiwiaW1wb3J0IEFjdGlvbkJsb2NrIGZyb20gJy4uL2FjdGlvbic7XG5pbXBvcnQgKiBhcyBiYXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgSW1hZ2VCbG9jayBmcm9tICcuLi9pbWFnZSc7XG5pbXBvcnQgVGV4dEJsb2NrIGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uV2l0aEljb25CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFjdGlvbkJsb2NrIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gc3R5bGU9e3suLi5iYXNlU3R5bGUuYWN0aW9uLCAuLi50aGlzLnByb3BzLnN0eWxlfX0+XG4gICAgICAgIDxJbWFnZUJsb2NrIHNyYz17dGhpcy5wcm9wcy5zcmN9IHN0eWxlPXt7Li4uYmFzZVN0eWxlLmltYWdlfX0gLz5cbiAgICAgICAgPFRleHRCbG9jayBzdHlsZT17ey4uLmJhc2VTdHlsZS50ZXh0fX0gdGV4dD17dGhpcy5wcm9wcy50aXRsZX0gLz5cbiAgICAgIDwvQWN0aW9uQmxvY2s+XG4gICAgKTtcbiAgfVxufVxuXG5BY3Rpb25XaXRoSWNvbkJsb2NrLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG4iLCJsZXQgYWN0aW9uID0ge1xuICBmbGV4RGlyZWN0aW9uOiAncm93J1xufVxuZXhwb3J0IHsgYWN0aW9uIH1cblxubGV0IGltYWdlID0ge1xuICBib3JkZXJSYWRpdXM6IDYwLFxuICB3aWR0aDogNjAsXG4gIGhlaWdodDogNjBcbn1cbmV4cG9ydCB7IGltYWdlIH1cblxubGV0IHRleHQgPSB7XG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZsZXg6IDEsXG4gIGZvbnRTaXplOiAyMCxcbiAgbWFyZ2luTGVmdDogMjAsXG4gIG1hcmdpblJpZ2h0OiAwXG59XG5leHBvcnQgeyB0ZXh0IH1cbiIsImltcG9ydCAqIGFzIGJhc2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBob3ZlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGUgPSB7Li4uYmFzZVN0eWxlLmJhc2UsIC4uLnRoaXMucHJvcHMuc3R5bGUuYmFzZX07XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlIHx8IHRoaXMuc3RhdGUuaG92ZXIpIHtcbiAgICAgIHN0eWxlID0gey4uLnN0eWxlLCAuLi5iYXNlU3R5bGUuYWN0aXZlLCAuLi50aGlzLnByb3BzLnN0eWxlLmFjdGl2ZX07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IHRydWV9KX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtob3ZlcjogZmFsc2V9KX0+XG5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy50aXRsZX1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbkFjdGlvbkJsb2NrLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cbkFjdGlvbkJsb2NrLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHtcbiAgICBiYXNlOiB7fSxcbiAgICBhY3RpdmU6IHt9XG4gIH1cbn1cbiIsImxldCBhY3RpdmUgPSB7XG4gIGNvbG9yOiAnaHNsKDAsIDUwJSwgNTAlKSdcbn1cblxuZXhwb3J0IHsgYWN0aXZlIH1cblxubGV0IGJhc2UgPSB7XG4gIGNvbG9yOiAnaHNsKDAsMCUsMCUpJyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIHBhZGRpbmc6ICcxNXB4IDAgMTVweCA1MHB4JyxcbiAgd2lkdGg6ICcxMDAlJ1xufVxuXG5leHBvcnQgeyBiYXNlIH1cbiIsImltcG9ydCBiYXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IHN0eWxlPXt7Li4uYmFzZVN0eWxlLCAuLi50aGlzLnByb3BzLnN0eWxlfX0gLz47XG4gIH1cbn1cblxuSW1hZ2VUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZTogIFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cbiIsImxldCBzdHlsZSA9IHtcbiAgbWF4V2lkdGg6ICcxMDAlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3Rpb25CbG9jayB9IGZyb20gJy4vYWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aW9uV2l0aEljb25CbG9jayB9IGZyb20gJy4vYWN0aW9uLXdpdGgtaWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlQmxvY2sgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3VidGl0bGVCbG9jayB9IGZyb20gJy4vc3VidGl0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0QmxvY2sgfSBmcm9tICcuL3RleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaXRsZUJsb2NrIH0gZnJvbSAnLi90aXRsZSc7XG4iLCJsZXQgc3R5bGUgPSB7XG4gIG1hcmdpbkxlZnQ6IDUwLFxuICBtYXJnaW5SaWdodDogMzVcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcbiIsImltcG9ydCBiYXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJ0aXRsZUJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDIgc3R5bGU9e3suLi5iYXNlU3R5bGUsIC4uLnRoaXMucHJvcHMuc3R5bGV9fT57dGhpcy5wcm9wcy5jaGlsZHJlbiB8fCB0aGlzLnByb3BzLnN1YnRpdGxlfTwvaDI+O1xuICB9XG59XG5cblN1YnRpdGxlQmxvY2sucHJvcFR5cGVzID0ge1xuICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc3VidGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn1cbiIsImltcG9ydCBibG9ja1N0eWxlIGZyb20gJy4uL3N0eWxlJ1xuXG5sZXQgYmFzZSA9IHtcbiAgLi4uYmxvY2tTdHlsZSxcbiAgZm9udFNpemU6IDIwLFxuICBmb250V2VpZ2h0OiA3MDAsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VcbiIsImltcG9ydCBiYXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxwIHN0eWxlPXt7Li4uYmFzZVN0eWxlLCAuLi50aGlzLnByb3BzLnN0eWxlfX0+e3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy50ZXh0fTwvcD47XG4gIH1cbn1cblxuVGV4dEJsb2NrLnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG4iLCJpbXBvcnQgYmxvY2tTdHlsZSBmcm9tICcuLi9zdHlsZSdcblxubGV0IHN0eWxlID0ge1xuICAuLi5ibG9ja1N0eWxlLFxuICBmb250U2l6ZTogMTYsXG4gIGxpbmVIZWlnaHQ6IDEuNjVcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcbiIsImltcG9ydCBiYXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZUJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDEgc3R5bGU9e3suLi5iYXNlU3R5bGUsIC4uLnRoaXMucHJvcHMuc3R5bGV9fT57dGhpcy5wcm9wcy5jaGlsZHJlbiB8fCB0aGlzLnByb3BzLnRpdGxlfTwvaDE+O1xuICB9XG59XG5cblRpdGxlQmxvY2sucHJvcFR5cGVzID0ge1xuICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc3VidGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn1cbiIsImltcG9ydCBibG9ja1N0eWxlIGZyb20gJy4uL3N0eWxlJ1xuXG5sZXQgc3R5bGUgPSB7XG4gIC4uLmJsb2NrU3R5bGUsXG4gIGZvbnRXZWlnaHQ6IDIwMFxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxuIiwiZXhwb3J0ICogYXMgYmxvY2tzIGZyb20gJy4vYmxvY2tzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFuZWwgfSBmcm9tICcuL3BhbmVsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFuZWxzIH0gZnJvbSAnLi9wYW5lbHMnO1xuIiwiaW1wb3J0IGJhc2VTdHlsZSBmcm9tICcuL3N0eWxlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17ey4uLmJhc2VTdHlsZSwgLi4udGhpcy5wcm9wcy5zdHlsZX19Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcbiAgfVxufVxuIiwibGV0IHN0eWxlID0ge1xuICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gIGhlaWdodDogJzEwMHZoJyxcbiAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gIHdpZHRoOiAzNjBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7XG4iLCJpbXBvcnQgYmFzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7Li4uYmFzZVN0eWxlLCAuLi50aGlzLnByb3BzLnN0eWxlfX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xuICB9XG59XG4iLCJsZXQgc3R5bGUgPSB7XG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBoZWlnaHQ6ICcxMDB2aCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7XG4iXX0=
