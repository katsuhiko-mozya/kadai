$(document).ready(function(){
    let url = "https://script.google.com/macros/s/AKfycbwy9miqw67cxInK6L9FuJV7XS33DwlSpeL3ulZDMFZSv7lKNSnwIRClMKmc2K_H9N2G/exec"
        $.ajax({
        type: "GET",
        url : url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
            success: function(json){
                json.forEach(function(data,index){
                    let newrow = '<tr><td>' + data.顧客ID + '</td><td><a href="index2.html?q=' + data.顧客ID + '">' + data.顧客名 + '</a></td><tr>' ;
                    $("tbody").append(newrow);  
                                        });
                                     }
            });
        }); 