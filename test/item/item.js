
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
          json.forEach(function(item,index){
            let addbutton ="";
            if(item.在庫 == 0){
              addbutton =  "<input type=" + '"button" class="btn btn-primary" id="' + item.商品ID + ' "value="売り切れ">'
            }else{
              addbutton =  "<input type=" + '"button" class="btn btn-primary" id="' + item.商品ID + ' "value="追加">'
            }
            c=item.商品ID 
            let itemrow = "<tr id='"+c+"'><td>" + item.商品ID  + "</td><td><sapn>" + item.商品名 +"</span></td><td>" + item.価格 +"</td><td>" + item.商品紹介 +"</td><td>" + addbutton +'</td></tr>';
            $("#select").append(itemrow);  

          });
        }
      });    
    });
  });
//cart
  $(function(){
    $(document).on("click", "input[type='button'][value='追加']", function(){
      //取得
      var item2 = $(this).closest("tr").find("td:eq(1)").text();
      var price = $(this).closest("tr").find("td:eq(2)").text();
     //カートの数字管理
     //基本は１だがすでにtableの中にtrがある場合そこから読み取り＋１する
      var a=1
      if ($("#cart>tr#"+item2).length) {
        $("#cart>tr#"+item2).find("td:eq(2)").text()
        a+= parseInt($("#cart>tr#"+item2).find("td:eq(2)").text())
      }
     //計算
      amount = a*price;

      //追加
      if ($("#cart>tr#"+item2).length){
      //もうある          
      $("#cart>tr#"+item2).find("td:eq(2)").text(a)
        $("#cart>tr#"+item2).find("td:eq(3)").text(amount)
        upd_amount()

      }else{
        //ない
        let cartrow = "<tr id='"+item2+"'><td><span>"+item2+"</span></td><td>"+price+"</td><td>"+a+"</td><td>"+amount+'</td><td><input type= "button" class="btn btn-primary"  value="削除"></td></tr>'
          $("#cart").append(cartrow)
          upd_amount()

     };

      });
      //削除
      
        $(document).on("click", "input[type='button'][value='削除']", function(){
          $(this).closest("tr").remove();
          upd_amount()

          }); 
    
      
      });
   

    
//送信
    $("#send").on("click",function() {
      let url = "https://run.mocky.io/v3/a05d6d4c-4d45-49c2-9d3a-31d00b3bc2a6"
      let data = {}
      const items = $("#").split("<br>");
      const prices = $(".alert-warning").html().replace("<b>price list in the cart</b><br>","").split("<br>");
      items.forEach(function(item, index){
          if(item.length > 0){
              data[item] = prices[index]
              };
      });  
       
      $.ajax({
          type: 'POST',
          url: url,
          dataType: 'json',
          //headers: {key:"secret"},//任意
          data: JSON.stringify(data),
          timeout: 3000,
              success: function(json){
                  console.log(json)
                  upd_stock()
                  window.alert("thank you")
              }
      });
      
    });

    function  upd_amount() {
       //合計金額
       var allamuount=0;
        $("tbody#cart>tr").each(function (index,tr) {
          goukei=$(tr).find("td:eq(3)").text();
      all=allamuount+= parseInt(goukei.replace(",",""));
      tax=allamuount*1.1;
      $("#nottax").text(all);
      $("#zeikomi").text(tax);
        });
      
    }

    
function upd_stock(){
  let url = "https://script.google.com/macros/s/AKfycbzd3mVSNMBKq-tEiQd_PuroAmSwdT2i6_lpu2aFxTKBrCQC9vC1whmi40byZNd_Sm7v/exec?action=update";
  let counts = {}
  cartitem=0;
   $("tbody#cart>tr").each(function (index,tr) {
    cartitem=$(tr).find("td:eq(2)").text();
   });
  items.forEach(function(item, index){
          if(item.lenght > 0){
              counts[item] = (counts[item])? counts[item] += 1 : 1;
          }
  });
      let item = [], count = [];
      $.each(counts, function (key,val) {
          item.push(key);
          count.push(val);    
      });
      $.ajax({
          type: 'GET',
          url: url += "&item=" + item + "&count=" + count,
          dataType: 'json',
          jsonpCallback: 'jsondata',
          timeout: 3000,
          success: function (json) {
              console.log(json)
          }    

      });