'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Likeform = function (_React$Component) {
  _inherits(Likeform, _React$Component);

  function Likeform(props) {
    _classCallCheck(this, Likeform);

    var _this = _possibleConstructorReturn(this, (Likeform.__proto__ || Object.getPrototypeOf(Likeform)).call(this, props));

    _this.state = { NAME: "", PRICE: "", DESCRIPTION: "" };
    _this.valuechange = _this.valuechange.bind(_this);
    _this.valuesubmit = _this.valuesubmit.bind(_this);
    return _this;
  }

  _createClass(Likeform, [{
    key: "valuechange",
    value: function valuechange(event) {
      switch (event.target.name) {
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
    key: "valuesubmit",
    value: function valuesubmit(event) {
      event.preventDefault(); //page変更阻止
      fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.add", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ fields: { NAME: this.state.NAME, PRICE: this.state.PRICE, DESCRIPTION: this.state.DESCRIPTION } }) }) //JSON.stringify送信用のJSONに変換（object(json)=>JSON)

      .then(function (res) {
        return res.json();
      }) //res(宣言)=>res.json()(jsonで格納)
      .then(function (eresult) {
        //前のthenの処理結果
        console.log(eresult);
        location.href = "add.html";
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.valuesubmit },
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
          React.createElement("input", { name: "PRICE", type: "number", value: this.state.PRICE, onChange: this.valuechange, required: true }),
          React.createElement("br", null)
        ),
        React.createElement(
          "label",
          null,
          "DESCRIPTION:",
          React.createElement("textarea", { name: "DESCRIPTION", cols: "30", rows: "10", required: true, value: this.state.DESCRIPTION, onChange: this.valuechange })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return Likeform;
}(React.Component);

var domContainer = document.querySelector('#like_cform_container');
ReactDOM.render(React.createElement(Likeform, null), domContainer);