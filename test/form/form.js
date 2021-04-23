$(document).ready(function () {
    var param = location.search.split("&")
   console.log(param)
   $.each(param,function(index,value) {
   let newrow = "<p>" + value.replace("?","").replace("name=","").replace("tel=","").replace("mail=","").replace("toiawase=","") + "</p>";
 $("body").append(newrow);
 }); 
});

//$("form").on("submit",function(e){
  //  e.preventDefault();
    //let form = $('form').serializeArray();
     //const param = JSON.stringify(form)
     //console.log(param)
     //$.each(param,function(index,value) {
       // let newrow = "<p>" + value.replace("?","").replace("name=","").replace("tel=","").replace("mail=","").replace("toiawase=","") + "</p>";
        //$("body").append(newrow);
     //}); 
//});