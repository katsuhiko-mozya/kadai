$(document).ready(function(){
    let url = "https://script.google.com/macros/s/AKfycby8ce-N203_lkNgvETAjGo6XcxCvZ765dsTjECCj_K3CjxpxQry6-y85gYUuIUTBXwM/exec"
        $.ajax({
        type: "GET",
        url : url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
            success: function(json){
                json.forEach(function(data,index){
                    let newrow = '<li><a href="' + data.サイトのURL + '">' + data.サイト名 + "</a></li>";
                    $("ul").append(newrow);  
                                        });
                                     }
            });
        });  
