'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var param = location.search;
console.log(param);

var Likeeform = function (_React$Component) {
  _inherits(Likeeform, _React$Component);

  function Likeeform(props) {
    _classCallCheck(this, Likeeform);

    var _this = _possibleConstructorReturn(this, (Likeeform.__proto__ || Object.getPrototypeOf(Likeeform)).call(this, props));

    _this.state = { ID: "", NAME: "", PRICE: "", DESCRIPTION: "", error: null,
      isLoaded: false };
    _this.valuechange = _this.valuechange.bind(_this);
    _this.valuesubmit = _this.valuesubmit.bind(_this);
    return _this;
  }

  _createClass(Likeeform, [{
    key: "valuechange",
    value: function valuechange(event) {
      switch (event.target.name) {
        case "ID":
          this.setState({ ID: event.target.value });
          break;
        case "NAME":
          this.setState({ NAME: event.target.value });
          break;
        case "PRICE":
          this.setState({ PRICE: event.target.value });
          break;
        case "DESCRIPTION":
          this.setState({ DESCRIPTION: event.target.value });
          break;
        default:
          break;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.get" + param).then(function (res) {
        return res.json();
      }) //ajax//jsonに変換
      .then( //done
      function (response) {
        console.log(response);
        _this2.setState({
          isLoaded: true,
          ID: response.result.ID,
          NAME: response.result.NAME, //stateにresponseのresultを代入＝stateに情報いっぱい
          PRICE: response.result.PRICE,
          DESCRIPTION: response.result.DESCRIPTION

        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "valuesubmit",
    value: function valuesubmit(event) {
      event.preventDefault(); //page変更阻止
      fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.update", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ ID: this.state.ID, fields: { NAME: this.state.NAME, PRICE: this.state.PRICE, DESCRIPTION: this.state.DESCRIPTION } }) }) //JSON.stringify送信用のJSONに変換（object(json)=>JSON)

      .then(function (res) {
        return res.json();
      }) //res(宣言)=>res.json()(jsonで格納)
      .then(function (eresult) {
        //前のthenの処理結果
        console.log(eresult);
        location.href = "edit.html" + param;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded;

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
        return React.createElement(
          "form",
          { onSubmit: this.valuesubmit },
          React.createElement(
            "label",
            null,
            "ID:",
            React.createElement("input", { name: "ID", type: "text", value: this.state.ID, onChange: this.valuechange, required: true }),
            React.createElement("br", null)
          ),
          React.createElement(
            "label",
            null,
            "Name:",
            React.createElement("input", { name: "NAME", type: "text", value: this.state.NAME, onChange: this.valuechange, required: true }),
            React.createElement("br", null)
          ),
          React.createElement(
            "label",
            null,
            "PRCE:",
            React.createElement("input", { name: "PRICE", type: "number", value: Math.floor(parseFloat(this.state.PRICE)), onChange: this.valuechange, required: true }),
            React.createElement("br", null)
          ),
          React.createElement(
            "label",
            null,
            "DESCRIPTION:",
            React.createElement("textarea", { name: "DESCRIPTION", cols: "30", rows: "10", required: true, value: this.state.DESCRIPTION, onChange: this.valuechange })
          ),
          React.createElement("input", { type: "submit", value: "edit" })
        );
      }
    }
  }]);

  return Likeeform;
}(React.Component);

var domContainer = document.querySelector('#like_eform_container');
ReactDOM.render(React.createElement(Likeeform, null), domContainer);