//情報の新規作成を行うcrudのcreate
$(document).ready(function () {
    
})

$(document).on("submit","form",function(e){
    e.preventDefault()
    let form =f_to_j($("form").serializeArray());
  console.log(form)
    $.ajax({
        type: "POST",
        url:　"https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.add",//createの場合updatateからaddに変更
        dataType: 'json',
        data:{fields:form},//ただのjsonデータを送る必要がある
       timeout:　3000,
    }).done(function (res) {
        console.log(res)
        a=res.result
        console.log(a)
       location.href="edit.html?id="+a
    })
})

//形式を変換　　[{name: "ID", value: "32"},{name: "NAME", value: "lemption t-shirt"}....] →｛=>{NAME: 商品名, DESCRIPTION: 商品説明, PRICE: 価格.....etc}
//配列のjsondataからただのjsondataに変換
function f_to_j(json) {
    var rtnjson = {};
    for (idx = 0; idx < json.length; idx++) {
        if(rtnjson[json[idx].name]){
            var jvalue = json[idx].value
            rtnjson[json[idx].name] += ', ' + jvalue
        }else{
            var jvalue = json[idx].value//form32を取得
            rtnjson[json[idx].name] = jvalue//ID=32
        }
    }
    return rtnjson;//変数に代入form
}