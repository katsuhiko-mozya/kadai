'use strict';

class Likeform extends React.Component {
  constructor(props){
    super(props)
    this.state={NAME:"",PRICE:"",DESCRIPTION:""};
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
       case "DESCRIPTION":
        this.setState({DESCRIPTION: event.target.value});
       break;
    default:
      break;
  }
  };

  valuesubmit(event){
    event.preventDefault()//page変更阻止
    fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.add"
      ,{
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
         method: "POST",
      body: JSON.stringify({ fields: {NAME:this.state.NAME,PRICE:this.state.PRICE,DESCRIPTION:this.state.DESCRIPTION}})})//JSON.stringify送信用のJSONに変換（object(json)=>JSON)
 
      .then(res=>res.json())//res(宣言)=>res.json()(jsonで格納)
      .then(
        (eresult)=>{//前のthenの処理結果
          console.log(eresult)
          location.href="add.html"
        }
        
      )
   
 }
  


  render() {
    return (
      <form onSubmit={this.valuesubmit}>
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
          <textarea name="DESCRIPTION" cols="30" rows="10" required value={this.state.DESCRIPTION} onChange={this.valuechange}></textarea>
          </label>
        <input type="submit" value="Submit"  />
      </form>
    );
  }
}
let domContainer = document.querySelector('#like_cform_container');
ReactDOM.render(<Likeform />, domContainer);