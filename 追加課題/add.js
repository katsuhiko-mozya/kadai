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
           let row1 ='<tr id="'+json.ID+'"><td>'+json.ID+'</td><td><a href="add2.html?id='+json.ID+'">'+json.NAME+'</a></td><td>'+Math.floor(json.PRICE)+'円</td><td><a href="edit.html?id='+json.ID+'"><input type="button" class="btn btn-primary" id="' + json.ID + ' "value="編集"></a></td><td><input type="button" class="btn btn-primary" id="' + json.ID + ' "value="削除"></td></tr>'
            $("tbody#1").append(row1)
})
    
    })

    $(document).on("click","input[type='button'][value='削除']",function () {
        id=$(this).closest("tr").attr("id")
        console.log(id)
        $.ajax({
            type: "POST",
            url:　"https://ateliercloudllc.bitrix24.jp/rest/1/pzxzq747zf5dgg89/crm.product.delete",//createの場合updatateからaddに変更
            dataType: 'json',
            data:{id:id },//ただのjsonデータを送る必要がある
           timeout:　3000,
        })
        .done(function (res) {
            window.alert("ID"+id+"の商品を削除しました")
          $("tr#"+id).remove();
        })
    })
})
