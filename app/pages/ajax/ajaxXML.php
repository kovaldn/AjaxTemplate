<?php
header('Content-Type: text/xml; charset=utf-8');
echo '<?xml version="1.0" encoding="utf-8" ?>', "\n";
echo "<ajax>\n";
echo "   <otvet>\n";
if (isset($_GET['text1']) && isset($_GET['text2'])) {
   echo "      <text1>";
   echo 'Поле 1 – ';
   echo htmlspecialchars($_GET['text1'], ENT_COMPAT, 'UTF-8');
   echo "</text1>\n";
   echo "      <text2>";
   echo 'Поле 2 – ';
   echo htmlspecialchars($_GET['text2'], ENT_COMPAT, 'UTF-8');
   echo "</text2>\n";
}
else {
   echo 'Данные не получены';
}
echo "   </otvet>\n";
echo "</ajax>\n";
?>