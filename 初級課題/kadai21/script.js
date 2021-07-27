$(document).ready(function(){
    let url = "https://script.google.com/macros/s/AKfycbyItG9VbE9S6OtgUQGfVs5M7jZrSzd-s3jasIhb6jzobdnzqcYcEY8MEqzgbf8eJCMF/exec"
        $.ajax({
        type: "GET",
        url : url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
            success: function(json){
                json.forEach(function(data,index){
                    //let newrow = '<figure><img src="' + data.URL + '"><figcaption>' + data.画像名 + "</figcaption></figure>";
                   let newrow = '<img src="' + data.URL + '">'; 
                    $("body").append(newrow);  
                                        });
                                     }
            });
        });  

        