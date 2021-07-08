$(document).ready(function () {
    let url = "https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.list"
    $.ajax({
        type: "POST",
        url:　url,
        dataType: 'json',
       timeout:　3000,
    }).done(function (response){
        console.log(response)
        $.each(response.result, function(i, json){
            let row1 ="<tr><td>"+json.ID+'</td><td><a href="add2.html?id='+json.ID+'">'+json.NAME+'</a></td><td>'+Math.floor(json.PRICE)+'円</td></tr>'
            $("tbody#1").append(row1)
})
    
    })
})