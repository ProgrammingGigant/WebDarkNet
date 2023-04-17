<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet='UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setForm('info@fls.guru');
    $mail->setAddress('p0tapov.yegor@yandex.ru');
    $mail->Subject="Сайт";


    $body='<h1>Письмо</h1>';


    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['mail']))){
        $body.='<p><strong>E-Mail:</strong> '.$_POST['mail'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }

    $mail->Body=$body;

    if(!$mail->send()){
        $message='Ошибка.';
    }else{
        $message='Письмо отправлено.';
    }

    $response = ['message'=>$message];

    header('Content-type: application/json');
    echo json_encode($response);
?>