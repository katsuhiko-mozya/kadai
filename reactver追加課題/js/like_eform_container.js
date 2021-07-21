'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Likeeform = function (_React$Component) {
  _inherits(Likeeform, _React$Component);

  function Likeeform(props) {
    _classCallCheck(this, Likeeform);

    var _this = _possibleConstructorReturn(this, (Likeeform.__proto__ || Object.getPrototypeOf(Likeeform)).call(this, props));

    _this.state = { ID: "", NAME: "", PRICE: "", DESCRIPTION: "" };
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
    key: "valuesubmit",
    value: function valuesubmit(event) {
      alert('A name was submitted: ' + this.state.ID + this.state.NAME + this.state.PRICE + this.state.DESCRIPTION);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.valueSubmit },
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
          React.createElement("input", { name: "PRICE", type: "number", value: this.state.PRICE, onChange: this.valuechange, required: true }),
          React.createElement("br", null)
        ),
        React.createElement(
          "label",
          null,
          "DESCRIPTION:",
          React.createElement("textarea", { name: "DESCRIPTION", cols: "30", rows: "10", required: true })
        ),
        React.createElement("input", { type: "submit", value: "edit" })
      );
    }
  }]);

  return Likeeform;
}(React.Component);

var domContainer = document.querySelector('#like_eform_container');
ReactDOM.render(React.createElement(Likeeform, null), domContainer);