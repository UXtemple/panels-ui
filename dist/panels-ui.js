(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PanelsUi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ActionBlock = _interopRequire(require("../action"));

var baseStyle = _interopRequireWildcard(require("./style"));

var ImageBlock = _interopRequire(require("../image"));

var TextBlock = _interopRequire(require("../text"));

var React = _interopRequire(require("react"));

var ActionWithIconBlock = (function (_React$Component) {
  function ActionWithIconBlock() {
    _classCallCheck(this, ActionWithIconBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ActionWithIconBlock, _React$Component);

  _createClass(ActionWithIconBlock, {
    render: {
      value: function render() {
        return React.createElement(
          ActionBlock,
          { href: this.props.href, style: _extends({}, baseStyle.action, this.props.style) },
          React.createElement(ImageBlock, { src: this.props.src, style: _extends({}, baseStyle.image) }),
          React.createElement(TextBlock, { style: _extends({}, baseStyle.text), text: this.props.title })
        );
      }
    }
  });

  return ActionWithIconBlock;
})(React.Component);

module.exports = ActionWithIconBlock;

ActionWithIconBlock.propTypes = {
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  style: React.PropTypes.object
};

},{"../action":3,"../image":5,"../text":11,"./style":2,"react":undefined}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var action = {
  flexDirection: "row"
};
exports.action = action;

var image = {
  borderRadius: 60,
  width: 60,
  height: 60
};
exports.image = image;

var text = {
  alignSelf: "center",
  flex: 1,
  fontSize: 20,
  marginLeft: 20,
  marginRight: 0
};
exports.text = text;

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequireWildcard(require("./style"));

var React = _interopRequire(require("react"));

var ActionBlock = (function (_React$Component) {
  function ActionBlock(props) {
    _classCallCheck(this, ActionBlock);

    _get(Object.getPrototypeOf(ActionBlock.prototype), "constructor", this).call(this, props);
    this.state = {
      active: false,
      hover: false
    };
  }

  _inherits(ActionBlock, _React$Component);

  _createClass(ActionBlock, {
    onClick: {
      value: function onClick(event) {
        event.preventDefault();
        this.setState({ active: !this.state.active });
      }
    },
    render: {
      value: function render() {
        var _this = this;

        var style = _extends({}, baseStyle.base, this.props.style);
        if (this.state.active || this.state.hover) {
          style = _extends({}, style, baseStyle.active);
        }

        return React.createElement(
          "a",
          { href: this.props.href, title: this.props.title, style: style,
            onClick: this.onClick.bind(this),
            onMouseEnter: function () {
              return _this.setState({ hover: true });
            },
            onMouseLeave: function () {
              return _this.setState({ hover: false });
            } },
          this.props.children || this.props.title
        );
      }
    }
  });

  return ActionBlock;
})(React.Component);

module.exports = ActionBlock;

ActionBlock.propTypes = {
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  style: React.PropTypes.object
};

},{"./style":4,"react":undefined}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var active = {
  color: "hsl(0, 50%, 50%)"
};

exports.active = active;

var base = {
  color: "hsl(0,0%,0%)",
  flexDirection: "row",
  textDecoration: "none",
  padding: "15px 0 15px 50px",
  width: "100%"
};

exports.base = base;

},{}],5:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequire(require("./style"));

var React = _interopRequire(require("react"));

var ImageTitle = (function (_React$Component) {
  function ImageTitle() {
    _classCallCheck(this, ImageTitle);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ImageTitle, _React$Component);

  _createClass(ImageTitle, {
    render: {
      value: function render() {
        return React.createElement("img", { src: this.props.src, style: _extends({}, baseStyle, this.props.style) });
      }
    }
  });

  return ImageTitle;
})(React.Component);

module.exports = ImageTitle;

ImageTitle.propTypes = {
  src: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
};

},{"./style":6,"react":undefined}],6:[function(require,module,exports){
"use strict";

var style = {
  maxWidth: "100%"
};

module.exports = style;

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionBlock = _interopRequire(require("./action"));
exports.ActionWithIconBlock = _interopRequire(require("./action-with-icon"));
exports.ImageBlock = _interopRequire(require("./image"));
exports.SubtitleBlock = _interopRequire(require("./subtitle"));
exports.TextBlock = _interopRequire(require("./text"));
exports.TitleBlock = _interopRequire(require("./title"));

},{"./action":3,"./action-with-icon":1,"./image":5,"./subtitle":9,"./text":11,"./title":13}],8:[function(require,module,exports){
"use strict";

var style = {
  marginLeft: 50,
  marginRight: 35
};

module.exports = style;

},{}],9:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequire(require("./style"));

var React = _interopRequire(require("react"));

var SubtitleBlock = (function (_React$Component) {
  function SubtitleBlock() {
    _classCallCheck(this, SubtitleBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(SubtitleBlock, _React$Component);

  _createClass(SubtitleBlock, {
    render: {
      value: function render() {
        return React.createElement(
          "h2",
          { style: _extends({}, baseStyle, this.props.style) },
          this.props.children || this.props.subtitle
        );
      }
    }
  });

  return SubtitleBlock;
})(React.Component);

module.exports = SubtitleBlock;

SubtitleBlock.propTypes = {
  style: React.PropTypes.object,
  subtitle: React.PropTypes.string
};

},{"./style":10,"react":undefined}],10:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blockStyle = _interopRequire(require("../style"));

var base = _extends({}, blockStyle, {
  fontSize: 20,
  fontWeight: 700,
  textTransform: "uppercase"
});

module.exports = base;

},{"../style":8}],11:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequire(require("./style"));

var React = _interopRequire(require("react"));

var TextBlock = (function (_React$Component) {
  function TextBlock() {
    _classCallCheck(this, TextBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TextBlock, _React$Component);

  _createClass(TextBlock, {
    render: {
      value: function render() {
        return React.createElement(
          "p",
          { style: _extends({}, baseStyle, this.props.style) },
          this.props.children || this.props.text
        );
      }
    }
  });

  return TextBlock;
})(React.Component);

module.exports = TextBlock;

TextBlock.propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object
};

},{"./style":12,"react":undefined}],12:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blockStyle = _interopRequire(require("../style"));

var style = _extends({}, blockStyle, {
  fontSize: 16,
  lineHeight: 1.65
});

module.exports = style;

},{"../style":8}],13:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequire(require("./style"));

var React = _interopRequire(require("react"));

var TitleBlock = (function (_React$Component) {
  function TitleBlock() {
    _classCallCheck(this, TitleBlock);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TitleBlock, _React$Component);

  _createClass(TitleBlock, {
    render: {
      value: function render() {
        return React.createElement(
          "h1",
          { style: _extends({}, baseStyle, this.props.style) },
          this.props.children || this.props.title
        );
      }
    }
  });

  return TitleBlock;
})(React.Component);

module.exports = TitleBlock;

TitleBlock.propTypes = {
  style: React.PropTypes.object,
  subtitle: React.PropTypes.string
};

},{"./style":14,"react":undefined}],14:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blockStyle = _interopRequire(require("../style"));

var style = _extends({}, blockStyle, {
  fontWeight: 200
});

module.exports = style;

},{"../style":8}],15:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var blocks = _interopRequireWildcard(require("./blocks"));

exports.blocks = blocks;
exports.Panel = _interopRequire(require("./panel"));
exports.Panels = _interopRequire(require("./panels"));

},{"./blocks":7,"./panel":16,"./panels":18}],16:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequire(require("./style"));

var React = _interopRequire(require("react"));

var Panel = (function (_React$Component) {
  function Panel() {
    _classCallCheck(this, Panel);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Panel, _React$Component);

  _createClass(Panel, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { style: _extends({}, baseStyle, this.props.style) },
          this.props.children
        );
      }
    }
  });

  return Panel;
})(React.Component);

module.exports = Panel;

},{"./style":17,"react":undefined}],17:[function(require,module,exports){
"use strict";

var style = {
  alignItems: "flex-start",
  height: "100vh",
  overflowX: "auto",
  width: 360
};

module.exports = style;

},{}],18:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var baseStyle = _interopRequire(require("./style"));

var React = _interopRequire(require("react"));

var Panels = (function (_React$Component) {
  function Panels() {
    _classCallCheck(this, Panels);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Panels, _React$Component);

  _createClass(Panels, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { style: _extends({}, baseStyle, this.props.style) },
          this.props.children
        );
      }
    }
  });

  return Panels;
})(React.Component);

module.exports = Panels;

},{"./style":19,"react":undefined}],19:[function(require,module,exports){
"use strict";

var style = {
  flexDirection: "row",
  height: "100vh"
};

module.exports = style;

},{}]},{},[15])(15)
});