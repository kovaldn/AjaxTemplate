<?php
header('Content-Type: text/plain; charset=utf-8');
if (isset($_GET['text1']) && isset($_GET['text2'])) {
   $text1 = htmlspecialchars($_GET['text1'], ENT_COMPAT, 'UTF-8');
   $text2 = htmlspecialchars($_GET['text2'], ENT_COMPAT, 'UTF-8');
   $arr = array('text1' => $text1, 'text2' => $text2);
   echo json_encode($arr);
}
else {
   $arr = array('text1' => 'Данные не получены', 'text2' =>'');
   echo json_encode($arr);
}
?>