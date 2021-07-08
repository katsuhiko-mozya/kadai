$(document).ready(function () {
    //パラメータ取得
    const param= location.search
    console.log(param)
    //urlにパラメータをつける
    //.list で全体取得
    //.get　指定したIDのみ取得                                                      ↓
    url2="https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.get"+param;
    //ajaxでdata読み込み
console.log(param,url2)
$.ajax({
    type: "GET",
    url:　url2,
    dataType: 'json',
   timeout:　3000,
})
.done(function (response2) {
    console.log(response2)
    item=response2.result
    let row = "<tr><td>"+ item.TIMESTAMP_X +"</td><td>"+ item.DESCRIPTION +"</td><td>" + item.CURRENCY_ID +"</td></tr>"
    console.log(row)
    $("tbody").append(row);                
    
})
})