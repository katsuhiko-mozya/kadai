$(document).ready(function () {
    var param = decodeURI(location.search).split("&")
    
   
   $.each(param,function(index,value) {
    //let p = "<span>" + value.replace("?","").replace("name=","").replace("tel=","").replace("mail=","").replace("toiawase=","") + "</span>";
    //$("#info2").append(p); 
   let newrow =  value.replace("?","").replace("name=","").replace("tel=","").replace("mail=","").replace("toiawase=","") ;
   
   
 $("tbody>tr>td:eq(1)").append(value);
 }); 
});
