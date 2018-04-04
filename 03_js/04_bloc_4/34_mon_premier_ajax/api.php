<?php

$message = new stdClass();
$message->fr = "bonjour monde";
$message->en = "hello world";
// var_dump($message);
echo json_encode($message);
