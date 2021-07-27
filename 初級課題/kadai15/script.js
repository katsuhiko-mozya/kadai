function showitem(){
      var n = document.getElementById("number1").value
    function primeNumber(n) {
        if (n === 2)
           return true;
       for (let i = 2; i < n; i++) {
              if (n % i === 0)
              return false;
       }
       return true;
   }

   if( primeNumber(n)=== true){
       window.alert("素数です");
   } else{
        window.alert("素数ではありません");
   };
   

    
};


