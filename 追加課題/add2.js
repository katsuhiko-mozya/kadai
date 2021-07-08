$(document).ready(function () {
    //パラメータ取得
    const param= location.search
    console.log(param)
    //urlにパラメータをつける
    url2="https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.list"+param;
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
   
                    
    
})
})