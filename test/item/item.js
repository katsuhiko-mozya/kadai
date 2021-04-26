
//取得
  $(function () {
    $(document).ready(function () {
      let url = "https://script.google.com/macros/s/AKfycbydqc9C9FFtK2LURN9uv2NRqtbiEVfv0FkpyZpmMTa8mCn1Acw9MJcBRH5y9FMJVvFx/exec"
      $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        jsonpCallback: 'jsondata',
        success: function(json){
          console.log(json)
          json.forEach(function(item,index){
            let addbutton ="";
            if(item.在庫 == 0){
              addbutton =  "<input type=" + '"button" class="btn btn-primary" id="' + item.商品ID + ' "value="売り切れ">'
            }else{
              addbutton =  "<input type=" + '"button" class="btn btn-primary" id="' + item.商品ID + ' "value="追加">'
            }
            let amount = "";
            let itemrow = "<tr><td>" + item.商品ID  + "</td><td><sapn>" + item.商品名 +"</span></td><td>" + item.価格 +"</td><td>" + item.商品紹介 +"</td><td>" + addbutton +'<input type="hidden" value="' + item.在庫 + '" id ="0"></td></tr>';
            //let  cartrow ="<tr><td>" + item.商品ID + "</td><td>" + item.商品名  +"</td><td><span>0</span></td><td>"+ amount +"</td><td></td></tr>";
            //$("#cart").append(cartrow); 
            $("#select").append(itemrow);  

          });
        }
      });    
    });
  });
//cart
  $(function(){
    $(document).on("click", "input[type='button'][value='追加']", function(){
      var item2 = $(this).closest("tr").find("td:eq(1)").text();
      var price = $(this).closest("tr").find("td:eq(2)").text();
      var a =  $(this).closest("tr").find("td:eq(4)").find('input[type="hidden"]').attr("id");
      var kazu =parseInt(a);
console.log(item2)
console.log(a)
console.log(kazu)
let cartrow ="" ;
if (kazu===0) {
  kazu=kazu+1;
  cartrow =  "<tr><td>"+item2+"</td><td>"+price+"</td><td>"+kazu+"</td></tr>";
  $("#cart").append(cartrow);
  $(this).closest("tr").find("td:eq(4)").find('input[type="hidden"]').attr("id",kazu);
}else{
  kazu2=kazu+1;
  $("#cart").find("tr").find("td:eq(2)").text(kazu2);
  kazu=kazu2;
  $(this).closest("tr").find("td:eq(4)").find('input[type="hidden"]').attr("id",kazu);
};
    })
  });
