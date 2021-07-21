'use strict';

class Likeeform extends React.Component {
  constructor(props){
    super(props)
    this.state={ID:"",NAME:"",PRICE:"",DESCRIPTION:""};
    this.valuechange=this.valuechange.bind(this);
    this.valuesubmit=this.valuesubmit.bind(this);
  }

 valuechange(event) {
  switch (event.target.name) {
    case "ID":
        this.setState({ID: event.target.value});
        break;
    case "NAME":
      this.setState({NAME: event.target.value});
      break;
      case "PRICE":
        this.setState({PRICE: event.target.value});
       break;
       case "DESCRIPTION":
        this.setState({DESCRIPTION: event.target.value});
       break;
    default:
      break;
  }
  };

 valuesubmit(event){
   alert('A name was submitted: '+ this.state.ID + this.state.NAME+this.state.PRICE+ this.state.DESCRIPTION);
 event.preventDefault();
 }


  render() {
    return (
      <form onSubmit={this.valueSubmit}>
          <label>
              ID:
              <input name="ID" type="text" value={this.state.ID} onChange={this.valuechange} required/><br/>  
          </label>
        <label>
          Name:
          <input name="NAME" type="text" value={this.state.NAME} onChange={this.valuechange} required/><br/>
          </label>
          <label>
            PRCE:
            <input name="PRICE" type="number" value={this.state.PRICE} onChange={this.valuechange} required/><br/>
          </label>
          <label>
          DESCRIPTION:
          <textarea name="DESCRIPTION" cols="30" rows="10" required></textarea>
          </label>
        <input type="submit" value="edit" />
      </form>
    );
  }
}
let domContainer = document.querySelector('#like_eform_container');
ReactDOM.render(<Likeeform />, domContainer);