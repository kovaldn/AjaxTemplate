<?php
header('Content-Type: text/html; charset=utf-8');
   if (isset($_POST['text1']) && isset($_POST['text2'])) {
      echo 'Метод POST – ', $_POST['text1'];
      echo 'Метод POST – ', $_POST['text2'];
   }
   else {
      echo 'Данные не получены';
   }

?>