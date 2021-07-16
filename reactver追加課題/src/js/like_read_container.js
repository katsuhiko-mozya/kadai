'use strict';

class Likeread extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
 return (
  
    <table>
  <thead>
    <th>TIMESTAMP_X</th>
    <th>DESCRIPTION</th>
    <th>CURRENCY_ID</th>
  </thead>
  <tbody></tbody>
</table>
  
    );
  }
}

let domContainer = document.querySelector('#like_read_container');
ReactDOM.render(<Likeread />, domContainer);