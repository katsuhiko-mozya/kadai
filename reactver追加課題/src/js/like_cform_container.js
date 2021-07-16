'use strict';

class Likeform extends React.Component {
  constructor(props) {//
    super(props);
    this.state = {value: ''};//valueというstateを宣言

    this.handleChange = this.handleChange.bind(this);//handleChangeを宣言
    this.handleSubmit = this.handleSubmit.bind(this);//handlesubmitを宣言
  }

  handleChange(event) {this.setState({value: event.target.value});
  }//valueを変更するイベント

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }//A name was submitted: ' + this.state.valueと表示するイベント


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
let domContainer = document.querySelector('#like_cform_container');
ReactDOM.render(<Likeform />, domContainer);