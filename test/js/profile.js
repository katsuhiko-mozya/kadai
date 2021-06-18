$(document).ready(function(){
    const param = location.search
   
    url = "https://script.google.com/macros/s/AKfycbzgRgaXOnAiD0OTPyx0U8dJWMw6UguZMvqdKUdQe-gqlCB5adoi-KATw_OyQ5F3PgaO/exec" + param 
    
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
            success: function(json){
                console.log(json)
                json.forEach(function(data,index){
                    let profilerow = "<tr><td>"+ data.名前 +"</td><td>"+ data.住所 +"</td><td>" + data.電話番号 +"</td><td>"+ data.年齢 +"</td><td>"+ data.mail +"</td></tr>"
               
                 $("tbody#pt").append(profilerow);
                              });
                                }
});
});
