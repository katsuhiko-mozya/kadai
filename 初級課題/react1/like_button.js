'use strict';

const e = React.createElement;
//elemntを初期化（作り出す）
//変数e クラスを初期化したものを代入
//eをinstanceという

class LikeButton extends React.Component {//　　extends React.Component　reactという拡張機能が使えるLikeButtonというclassを宣言　
  constructor(props) {//propsというconstructor（関数）
    super(props);//super React.Componentの情報を継承
    this.state = { liked: false };//ikeボタンのstate情報にはlikedという情報はないのでdefaultの値falseで情報を追加してしている
  }　　　　　　　　　　　　　　　　　//stateを宣言　　

  render() {//出力の内容
    if (this.state.liked) {//イベント発火時に実行されチェックされる
      return 'You liked this.';
    }

    return e(//buttonタグを生成
      'button',//タグ
      { onClick: () => this.setState({ liked: true }) },//onclickというイベントを設定　stateを設定
      'Like'//buttonのラベル
    );
  }
}

const domContainer = document.querySelector('#like_button_container');//.querySelector　HTML,divを入れ物として指定（出力先）
ReactDOM.render(e(LikeButton), domContainer);//ReactDOM.renderをdomContainer に実行