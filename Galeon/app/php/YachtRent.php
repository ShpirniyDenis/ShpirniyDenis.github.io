<?php


namespace App;


class YachtRent extends Mailer
{

    /**
     * @param  array  $data
     *
     * @throws \PHPMailer\PHPMailer\Exception
     */
    public function send(array $data)
    {
        $this->mail->Subject = 'Аренда яхты';
        $this->mail->Body= $this->template('php/templates/yacht_rent.php', $data);
        $this->mail->send();
    }
}