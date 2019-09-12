'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SegmentedControl = function (_Component) {
    _inherits(SegmentedControl, _Component);

    function SegmentedControl(props) {
        _classCallCheck(this, SegmentedControl);

        var _this = _possibleConstructorReturn(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call(this, props));

        _this.state = {
            selectedSegment: 0
        };
        _this.renderSegments = _this.renderSegments.bind(_this);
        return _this;
    }

    _createClass(SegmentedControl, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var selected = this.props.selected;
            if (this.props.segments.map(function (e) {
                return e.disabled;
            }).indexOf(true) == selected) {
                delete this.props.segments[selected].disabled;
                console.error('Selected segment cannot be disabled');
            }

            this.setState({ selectedSegment: selected });
        }
    }, {
        key: 'onChange',
        value: function onChange(selectedSegment) {
            this.setState({ selectedSegment: selectedSegment });
            this.props.onChangeSegment(selectedSegment);
        }
    }, {
        key: 'renderSegments',
        value: function renderSegments() {
            var _this2 = this;

            return this.props.segments.map(function (segment, i) {
                if (i === _this2.state.selectedSegment) {
                    return _react2['default'].createElement(
                        'li',
                        {
                            key: i,
                            className: _this2.props.variant + ' selected'
                        },
                        segment.name
                    );
                } else {
                    if (segment.disabled) {
                        return _react2['default'].createElement(
                            'li',
                            {
                                key: i,
                                className: '' + _this2.props.variant,
                                'aria-disabled': 'true'
                            },
                            segment.name
                        );
                    } else {
                        return _react2['default'].createElement(
                            'li',
                            {
                                key: i,
                                className: '' + _this2.props.variant,
                                onClick: function onClick() {
                                    return _this2.onChange(i);
                                }
                            },
                            segment.name
                        );
                    }
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'r-segmented-control' },
                _react2['default'].createElement(
                    'ul',
                    null,
                    this.renderSegments()
                )
            );
        }
    }]);

    return SegmentedControl;
}(_react.Component);

exports['default'] = SegmentedControl;


SegmentedControl.propTypes = {
    segments: _propTypes2['default'].array.isRequired,
    selected: _propTypes2['default'].number,
    variant: _propTypes2['default'].string
};

SegmentedControl.defaultProps = {
    onChangeSegment: function onChangeSegment(x) {
        return x;
    },
    variant: 'base',
    selected: 0
};