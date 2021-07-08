$(document).ready(function () {
    //パラメータ取得
    const param= location.search
    //urlにパラメータをつける
    url="https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.list"+param;
    //ajaxでdata読み込み
console.log(param,url)
$.ajax({
    type: "GET",
    url:　url,
    dataType: 'json',
   timeout:　3000,
})
.done(function (response2) {
    console.log(response2)
   
                    
    
})
})