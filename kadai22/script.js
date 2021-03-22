$(document).ready(function(){
    let url = "https://script.google.com/macros/s/AKfycbxXinoMBFabc_g-ZkEmTVd4PXI9Ib7h2gxn2eyECUTzHt0uTApkV3YNjnRhR5ZoVQ/exec"
        $.ajax({
        type: "GET",
        url : url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
            success: function(json){
                json.forEach(function(data,index){
                    let newrow = "<tr><td>"+ data.受注日時 + "</td><td>" + data.商品名　+ "</td><td>" + data.価格 + "</td><td>" + data.顧客ナンバー + "</td></tr>";
                    $("tbody").append(newrow);  
                                        });
                                     }
            });
        });  
       // <table><tbody></tbody></tbody></table>
       // <thead><tr><td>受注日時</td><td>商品名</td><td>価格</td><td>顧客ナンバー</td></tr></thead>