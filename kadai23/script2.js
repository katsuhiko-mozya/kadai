$(document).ready(function(){
    const param = location.search
    let url = "https://script.google.com/macros/s/AKfycbwy9miqw67cxInK6L9FuJV7XS33DwlSpeL3ulZDMFZSv7lKNSnwIRClMKmc2K_H9N2G/exec" + param
        $.ajax({
        type: "GET",
        url : url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
            success: function(json){
                json.forEach(function(data,index){
                    let newrow = "<tr> <th>顧客ID</th><td>" + data.顧客ID + "</td></tr><tr><th>顧客名</th><td>" + data.顧客名 + "</td></tr><tr><th>住所</th><td>" + data.住所 + "</td></tr><tr><th>電話番号</th><td>" + data.電話番号 + "</td></tr><tr><th>年齢</th><td>" + data.年齢 +"</td></tr>";
                    $("tbody").append(newrow);  
                                        });
                                     }
            });
        }); 
       