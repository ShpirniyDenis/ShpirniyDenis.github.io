<?php
namespace App;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

abstract class Mailer
{
    /**
     * @var PHPMailer
     */
    protected $mail;

    public function __construct()
    {
        $this->initMail();
    }

    /**
     * @throws \PHPMailer\PHPMailer\Exception
     */
    protected function initMail() : void
    {
        $this->mail = new PHPMailer(true);
        $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $this->mail->isSMTP();
        $this->mail->Host = SMTP_SERVER;
        $this->mail->SMTPAuth = true;
        $this->mail->Username = SMTP_USERNAME;
        $this->mail->Password = SMTP_PASSWORD;
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $this->mail->Port = SMTP_PORT;
        $this->mail->isHTML(true);
        $this->mail->setFrom(EMAIL_FROM);
        $this->mail->CharSet = 'UTF-8';
        $this->mail->addAddress(TO);
    }

    /**
     * @param  array  $data
     *
     * @return mixed
     */
    abstract public function send(array $data);

    /**
     * @param string $file
     * @param array $args
     *
     * @return false|string
     */
    protected function template( string $file, array $args ){
        var_dump(file_exists( $file ));

        if ( !file_exists( $file ) ) {
            return '';
        }

        if ( is_array( $args ) ){
            extract( $args );
        }

        ob_start();
        include $file;
        return ob_get_clean();
    }
}