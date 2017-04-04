<?php
header('Access-Control-Allow-Origin:http://daryldong.com/');

$url = "http://api.avatardata.cn/MingRenMingYan/Random?key=6685e58ae75f482895a7fa4d541ed35c";
$info = file_get_contents($url);
echo $info;