<?php

use App\CallRequest;
use App\ContactForm;
use App\YachtRent;

require_once 'vendor/autoload.php';

$mailers = [
    'call_request' => CallRequest::class,
    'yacht_rent' => YachtRent::class,
    'contact_form' => ContactForm::class,
];

$class = $mailers[$_POST['mail_type']];

try {
    $mailer = new $class();
    $mailer->send($_POST);

    return json_encode(['status' => 'success']);
} catch (Exception $e) {
    return json_encode(['status' => 'error', 'message' => $mailer->ErrorInfo]);
}
