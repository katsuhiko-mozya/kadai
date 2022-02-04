import { User } from "./User";
import UUID from 'uuid';

const user = new User('北村', '勝彦', 21);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {//!!=boolianとして判別
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;//埋め込み
}
// HTMLエレメントを取得 キャストすることで、入力補完が効く
const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
// ボタンのクリックイベントを追加
saibanButton.onclick = (e) => {
    uuidSpan.innerText = UUID.v4();
}