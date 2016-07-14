<?php
header('Content-Type: text/html; charset=utf-8');
if (isset($_GET['text1'])) {
   $msg = 'Данные - ' . $_GET['text1'];
   echo '<script>', "\n";
   echo 'parent.document.getElementById("text1").value = "";'."\n";
   echo 'parent.document.getElementById("otvet").innerHTML ="';
   echo htmlspecialchars($msg, ENT_COMPAT, 'UTF-8'). '";';
   echo "</script>\n";
}
else {
   echo 'Данные не получены';
}
?>