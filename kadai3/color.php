<!doctype html>
<html lang="JP">
  <head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
  <body>
  <?php
           $number = mt_rand(0,4);
           $color ="";
          switch ($number) {
              case 0:
                $color = "#000000";
                break;
              case 1:
                $color = "#ff0000";
                break;
              case 2:
                $color = "#008000";
                break;
              case 3:
                $color = "#0000ff";
                break;
              case 4:
                $color = "#ffff00";
                break;
              default:
                break;
            }
          $size=mt_rand(0,99)."px";
          
          echo "<p style=\"font-size:$size; color:$color \">";
            $p= $_POST['p'];
            echo $p;
          echo "</p>";
  ?>
  </body>
</html>