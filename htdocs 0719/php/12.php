<?php
    header("Pragma: no-cache"); //캐시로 남기지 마
    header('Cache-Control: no-cache,must-revalidate'); //의미 전달 해더
    header('Content-Type: text.plain');

    $current= date('Y-m-d H:i:s');

    echo("현재 서버 시간은 ".$current."이다");
?>