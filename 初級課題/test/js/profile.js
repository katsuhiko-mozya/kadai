$(document).ready(function(){
    //パラメータ取得
    const param = location.search
   //urlにパラメータをつける
    url = "https://script.google.com/macros/s/AKfycbzgRgaXOnAiD0OTPyx0U8dJWMw6UguZMvqdKUdQe-gqlCB5adoi-KATw_OyQ5F3PgaO/exec" + param ;
    console.log(url)
    //ajaxでdata読み込み
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
