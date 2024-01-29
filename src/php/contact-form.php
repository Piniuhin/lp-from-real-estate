<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

/*
*  CONFIGURATION
*/

// Recipients
$fromEmail = 'info@ваш_домен'; // Email address that will be in the from field of the message.
$fromName = 'Ваше имя'; // Name that will be in the from field of the message.
$sendToEmail = 'info@ваш_домен'; // Email address that will receive the message with the output of the form
$sendToName = 'Ваше имя'; // Name that will receive the message with the output of the form

// Subject
$subject = 'Сообщение для Вашей компании';

// SMTP settings
$smtpUse = true; // Установите в true, чтобы включить аутентификацию SMTP
$smtpHost = 'smtp.gmail.com'; // SMTP хост (например, 'smtp.gmail.com' для Gmail)
$smtpUsername = 'ваш_адрес@gmail.com'; // Ваш адрес электронной почты
$smtpPassword = 'ваш_пароль'; // Ваш пароль
$smtpSecure = 'tls'; // Включите TLS или SSL шифрование
$smtpAutoTLS = false; // Отключите автоматический TLS, если не требуется
$smtpPort = 587; // Порт для подключения к SMTP (587 для TLS у Gmail)

// Success and error alerts
$okMessage = 'Мы получили ваш запрос. Ожидайте, мы свяжемся с вами в ближайшее время.';
$errorMessage = 'При отправке формы произошла ошибка. Пожалуйста, попробуйте позже.';

// Fields - Value of attribute name => Text to appear in the email
$fields = array(
    'fullname' => 'Имя и Фамилия:',
    'company' => 'Название компании:',
    'email' => 'Email:',
    'phone' => 'Номер телефона:',
    'message' => 'Сообщение:',
);

/*
*  LET'S DO THE SENDING
*/

// Если не нужно отображать ошибки, выключите error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);
try {
    if (count($_POST) == 0) throw new \Exception('Форма пуста');
    
    $emailTextHtml = "<table>";
    foreach ($_POST as $key => $value) {
        // Если поле существует в массиве $fields, включите его в письмо
        if (isset($fields[$key])) {
            $emailTextHtml .= "<tr><th><b>$fields[$key]</b></th><td>$value</td></tr>";
        }
    }
    $emailTextHtml .= "</table>";

    $mail = new PHPMailer;
    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($sendToEmail, $sendToName);
    $mail->addReplyTo($fromEmail, $fromName);
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $subject;
    $mail->Body = $emailTextHtml;
    $mail->msgHTML($emailTextHtml);

    if ($smtpUse == true) {
        // Указываем PHPMailer использовать SMTP
        $mail->isSMTP();
        // Включаем отладку SMTP
        // 0 = выключено (для использования в продакшене)
        // 1 = сообщения клиента
        // 2 = сообщения клиента и сервера
        $mail->SMTPDebug = 0;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = $smtpSecure;
        $mail->SMTPAutoTLS = $smtpAutoTLS;
        $mail->Host = $smtpHost;
        $mail->Port = $smtpPort;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
    }

    if (!$mail->send()) {
        throw new \Exception('Не удалось отправить письмо. ' . $mail->ErrorInfo);
    }

    $responseArray = array('type' => 'success', 'message' => $okMessage);
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}

// Если запрос был сделан через AJAX, возвращаем JSON-ответ
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
} else {
    echo $responseArray['message'];
}
