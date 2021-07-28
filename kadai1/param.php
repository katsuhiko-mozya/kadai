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
        }  elseif ($_SERVER["REQUEST_METHOD"]) {
            $number1= $_POST['number1'];
            $tool = $_POST['tool'];
            $number2 = $_POST['number2'];
        }
        switch ($tool) {
            case '+':
                echo $number1 + $number2;
                break;
            
            case '-':
                echo $number1 - $number2;
                break;
                        
            case '*':
                echo $number1 * $number2;
                break;        

            case '/':
                echo $number1 / $number2;
                break;
            default:
                break;
        }

?>
  </body>
</html>