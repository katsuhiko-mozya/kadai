function showitem(){
    var x = parseInt( document.getElementById("id0").value);
    var y = parseInt( document.getElementById("id2").value);
    var z = document.getElementById("name").value;
    console.log(x)
    console.log(y)
    console.log(z)
    var a
    switch(z){
        case "+" :
            a=x+y 
            window.alert(a);
            break;
        
        case "-" :
            a=x-y 
            window.alert(a);
           break;
    
        case "*" :
            a=x*y 
            window.alert(a);
           break;

        case "/" :
          if(y===0){
              window.alert("入力しなおしてください");
          } else{
            a=x/y 
            window.alert(a);
            console.log(a)
          };
           break;  
        
         default:
             window.alert("入力しなおしてください");
             break;
    };

    };
