<?php
require_once 'Telegram.php';

$telegram = new Telegram;

if(isset($_POST) && $_POST['agree']) {
    $message = "Имя: {$_POST['name']}\n";
    $message .= "Номер: {$_POST['phone']}\n";
    $message .= "Email: {$_POST['email']}";

    $telegram->sendMessage($message);

    return header("Location: ".$_SERVER['HTTP_REFERER']);
}