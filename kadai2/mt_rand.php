<!doctype html>
<html lang="JP">
  <head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
  <body>
<?php

while ($x <= 99) {
  $array[]=mt_rand(0,999);
  $x++;
}

foreach($array as $index => $number){
  echo "$index : $number <br>";
}
?>
  </body>
</html>