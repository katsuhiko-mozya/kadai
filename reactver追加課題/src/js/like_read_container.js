'use strict';

const param =location.search
console.log(param)

class Likeread extends React.Component {
  constructor(props) {
    super(props);
     this.state = { 
      error: null,
      isLoaded: false,
      rows: []
     };
  }

  componentDidMount() {
    fetch("https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.get"+param)
   .then(res => res.json())
    .then(
        (response) => {
          console.log(response)
          this.setState({
            isLoaded: true,
            rows: response.result
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

  render() {
    const {error,isLoaded,rows}=this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
      return <div>Loading...</div>;}
      else{
 return (
  
    <table>
  <thead>
    <tr>
    <th>TIMESTAMP_X</th>
    <th>DESCRIPTION</th>
    <th>CURRENCY_ID</th>
    </tr>
  </thead>
  <tbody>
   <tr>
     <td>{rows.TIMESTAMP_X}</td>
     <td>{rows.DESCRIPTION}</td>
     <td>{rows.CURRENCY_ID}</td>
   </tr>
  </tbody>
</table>
  
    );
 }
}
}

let domContainer = document.querySelector('#like_read_container');
ReactDOM.render(<Likeread />, domContainer);