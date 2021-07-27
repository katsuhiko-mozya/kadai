<!doctype html>
<html lang="JP">
  <head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
  <body>
      <?php
       $color="#".mt_rand(10,99).mt_rand(10,99).mt_rand(10,99);
       $size=mt_rand(0,99)."px";
    
     echo "<p style=\"font-size:$size; color:$color \">";
 $p= $_POST['p'];
 echo $p;
echo "</p>";
?>
  </body>
</html>