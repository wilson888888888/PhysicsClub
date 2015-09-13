<?php
$name = $_REQUEST['name'];
$project = $_REQUEST['project'];
$file = fopen("projectlist.txt","a+");
fwrite($file,$name);
fwrite($file,$email);
fwrite($file,"\r\n");
fclose($file);
print_r(error_get_last());
?>