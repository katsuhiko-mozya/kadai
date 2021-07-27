//情報の編集をしたい！！crudのupdate
$(document).ready(function () {
    const param= location.search
    url2="https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.get"+param;
    $.ajax({
        type: "POST",
        url:　url2,
        dataType: 'json',
       timeout:　3000,
    })//add2と同じ
    .done(function (response) {
        item=response.result
        console.log(item)
        $("#input1").val(item.ID)
        $("#input2").val(item.NAME)
        $("#input3").val(Math.floor(item.PRICE))
        $("#input4").text(item.DESCRIPTION )
    })

    $(document).on("submit", "form", function(e){
        e.preventDefault()  //submitによるページ移動をキャンセル
        let form = $("form").serializeArray();//.serializeArray()：formをinput要素をjsosnに格納
        console.log(form)
        form=f_to_j(form)
        console.log(form)
        const id=location.search.replace("?id=","")
        $.ajax({
            type: "POST",
            url:　"https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.update",//createの場合updatateからaddに変更
            dataType: 'json',
            data:{id:id ,fields:form},//ただのjsonデータを送る必要がある
           timeout:　3000,
        })
        .done(function (res) {
            console.log(res)
            window.alert("更新できました")
            //id取得して
            //a=res.result
            //location.href="url?id=a"
})
        }); 
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



