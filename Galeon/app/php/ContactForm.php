<?php


namespace App;


class ContactForm extends Mailer
{

    /**
     * @param  array  $data
     *
     * @throws \PHPMailer\PHPMailer\Exception
     */
    public function send(array $data)
    {
        $this->mail->Subject = 'Обратная связь';

        $this->mail->Body= $this->template('php/templates/contact_form.php', $data);
        $this->mail->send();
    }
}