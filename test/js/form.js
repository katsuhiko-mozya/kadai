$(document).ready(function () {
    var param = decodeURI(location.search).split("&")
    console.log(param)
   
   $.each(param,function(index,value) {
    let output = value.replace("?","").split("=") // ["name","あ"]
    console.log(output[1]) // = あ

    // $("tr:eq(" + String(index) + ")>td:eq(1)").text(output[1])

    switch(index){
      case 0: 
      $("span.name").text(output[1])
          break;
        case 1: $("span.tel").text(output[1])
          break;
        case 2: $("span.mail").text(output[1])
          break;
        case 3: $("span.memo").text(output[1])
          break;
          default:
            break;
    }
   

 //$("tbody>tr>td:eq(1)").append(value);
 }); 
});
