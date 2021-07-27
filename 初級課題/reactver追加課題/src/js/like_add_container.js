'use strict';

class Likeadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      isLoaded: false,
      rows: [],
      ID:""
     };
     this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.list")
    // , { method: "POST",
    //body: JSON.stringify(this.state)}
    //create,updtate,deleteの時使う
    .then(res => res.json())//ajax//jsonに変換
    .then(//done
        (response) => {//=.then(res => res.json())   urlのresultの中身　ex.result: Array(28)
          this.setState({
            isLoaded: true,
            rows: response.result//stateにresponseのresultを代入＝stateに情報いっぱい
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

      handleClick(event)  {
       // this.setState({ID: event.target.id});
        fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.delete"
        ,{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            method: "POST",
         body: JSON.stringify({ID:event.target.id})
        }
         )
         .then(res=>res.json())
         .then((dresult)=>
         {console.log(dresult)
          location.href="add.html"
        }
         )
            }

  render() {
    const {error,isLoaded,rows}=this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
      return <div>Loading...</div>;}
      else{

        return (//errorでもisloadedでもなければtable表示
          
          <table>
      <thead>
        <tr>
        <th>ID</th>
       <th>NAME</th>
       <th>PRICE</th>
       <th></th>
       <th></th>
        </tr>
      </thead>
      <tbody>
      {rows.map(row => (//map(row =>は反復＝rowsの数だけ反復
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td><a href={'read.html?id=' + row.ID}>{row.NAME}</a></td>
              <td>{Math.floor(row.PRICE).toLocaleString()}</td>
              <td><a href={'edit.html?id='+row.ID}><input type="button"  value="編集"/></a></td>
              <td><input type="button"  value="削除" id={row.ID} onClick={this.handleClick} /></td>
            </tr>
          ))}
    </tbody>
    </table>
  
  );
}
}
}

let domContainer = document.querySelector('#like_add_container');
ReactDOM.render(<Likeadd />, domContainer);