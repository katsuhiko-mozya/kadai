'use strict';

class Likeform extends React.Component {
  constructor(props){
    super(props)
    this.state={NAME:"",PRICE:""};
    this.valuechange=this.valuechange.bind(this);
    this.valuesubmit=this.valuesubmit.bind(this);
  }

 valuechange(event) {
  switch (event.target.name) {
    case "NAME":
      this.setState({NAME: event.target.value});
      break;
      case "PRICE":
        this.setState({PRICE: event.target.value});
       break;
  
    default:
      break;
  }
  };

 valuesubmit(event){
   alert('A name was submitted: ' + this.state.NAME+this.state.PRICE);
 event.preventDefault();
 }


  render() {
    return (
      <form onSubmit={this.valueSubmit}>
        <label>
          Name:
          <input name="NAME" type="text" value={this.state.NAME} onChange={this.valuechange} /><br/>
          </label>
          <label>
            PRCE:
            <input name="PRICE" type="number" value={this.state.PRICE} onChange={this.valuechange} />
          </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
let domContainer = document.querySelector('#like_cform_container');
ReactDOM.render(<Likeform />, domContainer);