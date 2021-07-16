'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
 return (
  
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
      <tbody id="1">
    </tbody>
    </table>
  
    );
  }
}

let domContainer = document.querySelector('#like_table_container');
ReactDOM.render(<LikeButton />, domContainer);