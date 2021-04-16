$(document).ready(function () {
   const param = location.search.split("&")
   console.log(param)
   $.each(param,function(index,value) {
      let newrow = "<li>" + value + "</li>";
      $("ul#id").append(newrow);
   });

});