'use strict';
const param=location.search
console.log(param)

class Likeeform extends React.Component {
  constructor(props){
    super(props)
    this.state={ID:"",NAME:"",PRICE:"",DESCRIPTION:"", error: null,
    isLoaded: false,};
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

  componentDidMount() {
    fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.get"+param)
    .then(res => res.json())//ajax//jsonに変換
    .then(//done
        (response) => {
          console.log(response)
          this.setState({
            isLoaded: true,
            ID: response.result.ID,
            NAME: response.result.NAME,//stateにresponseのresultを代入＝stateに情報いっぱい
            PRICE: response.result.PRICE,
            DESCRIPTION: response.result.DESCRIPTION

          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        )
      }

 valuesubmit(event){
   event.preventDefault()//page変更阻止
   fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.update"
     ,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        method: "POST",
     body: JSON.stringify({ID: this.state.ID, fields: {NAME:this.state.NAME,PRICE:this.state.PRICE,DESCRIPTION:this.state.DESCRIPTION}})})//JSON.stringify送信用のJSONに変換（object(json)=>JSON)

     .then(res=>res.json())//res(宣言)=>res.json()(jsonで格納)
     .then(
       (eresult)=>{//前のthenの処理結果
        console.log(eresult)
         location.href="edit.html"+param
       }
       
     )
  
}




  render() {
    const {error,isLoaded}=this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
      return <div>Loading...</div>;}
      else{
    return (
      <form onSubmit={this.valuesubmit}>
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
            <input name="PRICE" type="number" value={Math.floor(parseFloat(this.state.PRICE))} onChange={this.valuechange} required/><br/>
          </label>
          <label>
          DESCRIPTION:
          <textarea name="DESCRIPTION" cols="30" rows="10" required value={this.state.DESCRIPTION}　onChange={this.valuechange}></textarea>
          </label>
        <input type="submit" value="edit" />
      </form>
    );
  }
}
}
let domContainer = document.querySelector('#like_eform_container');
ReactDOM.render(<Likeeform />, domContainer);