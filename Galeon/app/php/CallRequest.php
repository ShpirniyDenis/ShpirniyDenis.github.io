<?php


namespace App;


class CallRequest extends Mailer
{

    /**
     * @param  array  $data
     *
     * @throws \PHPMailer\PHPMailer\Exception
     */
    public function send(array $data)
    {
        $this->mail->Subject = 'Обратный звонок';

        $this->mail->Body = $this->template('php/templates/call_request.php', $data);
        $this->mail->send();
    }
}