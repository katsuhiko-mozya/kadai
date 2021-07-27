'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var param = location.search;
console.log(param);

var Likeread = function (_React$Component) {
  _inherits(Likeread, _React$Component);

  function Likeread(props) {
    _classCallCheck(this, Likeread);

    var _this = _possibleConstructorReturn(this, (Likeread.__proto__ || Object.getPrototypeOf(Likeread)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      rows: []
    };
    return _this;
  }

  _createClass(Likeread, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.get" + param).then(function (res) {
        return res.json();
      }).then(function (response) {
        console.log(response);
        _this2.setState({
          isLoaded: true,
          rows: response.result
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          rows = _state.rows;

      if (error) {
        return React.createElement(
          'div',
          null,
          'Error: ',
          error.message
        );
      } else if (!isLoaded) {
        return React.createElement(
          'div',
          null,
          'Loading...'
        );
      } else {
        return React.createElement(
          'table',
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'TIMESTAMP_X'
              ),
              React.createElement(
                'th',
                null,
                'DESCRIPTION'
              ),
              React.createElement(
                'th',
                null,
                'CURRENCY_ID'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                rows.TIMESTAMP_X
              ),
              React.createElement(
                'td',
                null,
                rows.DESCRIPTION
              ),
              React.createElement(
                'td',
                null,
                rows.CURRENCY_ID
              )
            )
          )
        );
      }
    }
  }]);

  return Likeread;
}(React.Component);

var domContainer = document.querySelector('#like_read_container');
ReactDOM.render(React.createElement(Likeread, null), domContainer);