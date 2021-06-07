$(document).ready(function () {
    var param = location.search.split("&")
    
   console.log(param)
   $.each(param,function(index,value) {
   let newrow = "<td>" + value.replace("?","").replace("name=","").replace("tel=","").replace("mail=","").replace("toiawase=","") + "</td>";
   let formrow = 
 $("tbody>tr").append(newrow);
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


//$(document).on("click", "input[type='submit']",function(){
  //let name = $("input#name").text();
  //let tel = $("input#tel").text();
  //let mail = $("input#nmail").text();
  //let naiyou = $("textarea#toiawase").text();
  //console.log(name)
  //console.log(tel)
  //console.log(mail)
  //console.log(naiyou)
//});