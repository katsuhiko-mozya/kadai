'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Likeadd = function (_React$Component) {
  _inherits(Likeadd, _React$Component);

  function Likeadd(props) {
    _classCallCheck(this, Likeadd);

    var _this = _possibleConstructorReturn(this, (Likeadd.__proto__ || Object.getPrototypeOf(Likeadd)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      rows: [],
      ID: ""
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Likeadd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.list")
      // , { method: "POST",
      //body: JSON.stringify(this.state)}
      //create,updtate,deleteの時使う
      .then(function (res) {
        return res.json();
      }) //ajax//jsonに変換
      .then( //done
      function (response) {
        //=.then(res => res.json())   urlのresultの中身　ex.result: Array(28)
        _this2.setState({
          isLoaded: true,
          rows: response.result //stateにresponseのresultを代入＝stateに情報いっぱい
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      // this.setState({ID: event.target.id});
      fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.delete", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ ID: event.target.id })
      }).then(function (res) {
        return res.json();
      }).then(function (dresult) {
        console.log(dresult);
        location.href = "add.html";
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          rows = _state.rows;

      if (error) {
        return React.createElement(
          "div",
          null,
          "Error: ",
          error.message
        );
      } else if (!isLoaded) {
        return React.createElement(
          "div",
          null,
          "Loading..."
        );
      } else {

        return (//errorでもisloadedでもなければtable表示

          React.createElement(
            "table",
            null,
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "th",
                  null,
                  "ID"
                ),
                React.createElement(
                  "th",
                  null,
                  "NAME"
                ),
                React.createElement(
                  "th",
                  null,
                  "PRICE"
                ),
                React.createElement("th", null),
                React.createElement("th", null)
              )
            ),
            React.createElement(
              "tbody",
              null,
              rows.map(function (row) {
                return (//map(row =>は反復＝rowsの数だけ反復
                  React.createElement(
                    "tr",
                    { key: row.ID },
                    React.createElement(
                      "td",
                      null,
                      row.ID
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement(
                        "a",
                        { href: 'read.html?id=' + row.ID },
                        row.NAME
                      )
                    ),
                    React.createElement(
                      "td",
                      null,
                      Math.floor(row.PRICE).toLocaleString()
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement(
                        "a",
                        { href: 'edit.html?id=' + row.ID },
                        React.createElement("input", { type: "button", value: "\u7DE8\u96C6" })
                      )
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement("input", { type: "button", value: "\u524A\u9664", id: row.ID, onClick: _this3.handleClick })
                    )
                  )
                );
              })
            )
          )
        );
      }
    }
  }]);

  return Likeadd;
}(React.Component);

var domContainer = document.querySelector('#like_add_container');
ReactDOM.render(React.createElement(Likeadd, null), domContainer);