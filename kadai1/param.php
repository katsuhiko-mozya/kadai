<!doctype html>
<html lang="JP">
  <head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
  <body>
<?php
if ($_SERVER["REQUEST_METHOD"] === "GET"){
 $number1= $_GET['number1'];
 $tool = $_GET['tool'];
 $number2 = $_GET['number2'];
 $ans = 0;
 switch ($tool) {
     case '+':
         $ans = $number1 + $number2;
         echo $ans;
         break;
     
    case '-':
    $ans = $number1 - $number2;
    echo $ans;
    break;
    
    case '*':
        $ans = $number1 * $number2;
        echo $ans;
        break;
    
    case '/':
        $ans = $number1 / $number2;
        echo $ans;
        break;
                
     default:
         break;
 }
}else if ($_SERVER["REQUEST_METHOD"]) {
 
    $number3= $_POST['number3'];
    $tool2 = $_POST['tool2'];
    $number4 = $_POST['number4'];
    $ans2 = 0;
    switch ($tool2) {
        case '+':
            $ans2 = $number3 + $number4;
            echo $ans2;
            break;
            
            case '-':
                $ans2 = $number3 - $number4;
                echo $ans2;
                break;
                
                case '*':
                    $ans2 = $number3 * $number4;
                    echo $ans2;
                    break;
                    
                    case '/':
                        $ans2 = $number3 / $number4;
                        echo $ans2;
                        break;
                        
                        default:
                        error;
                        break;
                    }
                }
                    ?>
  </body>
</html>