
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
            
            let newrow = "<tr><td>" + item.商品ID  + "</td><td><sapn>" + item.商品名 +"</span></td><td>" + item.価格 +"</td><td>" +  "</td><td>" + item.商品紹介 +"</td><td>" + addbutton +'<input type="hidden" value="' + item.在庫 + '"></td></tr>';
            $("#select").append(newrow);  
          });
        }
      });    
    });
  });
  var item2 = $("#select").closest("tr").find("td:eq(1)").text();
  var price = parseInt($("#select").closest("tr").find("td:eq(2)").text());
  var kazu =  0//parseInt($("table#cart").find("span").html());
  let cartrow ="<tr><td>" + item2 + "</td><td>" + price  +"</td><td><span>" + kazu + "</span></td><td></td><td></td></tr>";
  $("#cart").append(cartrow);  
  
  
  //計算
  $(function(){
    $(document).on("click", "input[type='button'][value='追加']", function(){
      var kazu =parseInt($("table#cart").find("span").html());
          num = kazu+1;
          kazu = num;
          $("table#cart").find("span").html(kazu);
        
      //let stock = parseInt($(this).next('input[type="hidden"]').val());
     console.log(kazu)       
    });
      });
          






