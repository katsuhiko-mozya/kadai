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
            let row1 ="<tr><td>"+json.ID+"</td><td>"+json.NAME+"</td><td>"+json.CODE+"</td></tr>"
            $("tbody#1").append(row1)

            let row2 ="<tr><th>ID</th><td>"+json.ID+"<td></tr>"
            let row3 ="<tr><th>NAME</th><td>"+json.NAME+"<td></tr>"
            let row4 ="<tr><th>CODE</th><td>"+json.CODE+"<td></tr>"
            console.log(row2)
            $("tbody#2").append(row2,row3,row4)
        })
    
    })
})