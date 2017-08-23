<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $building = $_POST['building'];
    $housing = $_POST['housing'];
    $apartment = $_POST['apartment'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $pay = $_POST['pay-option'];


    $disturb = $_POST['dont-disturb'];
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
        <head>Заявка</head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $building . '</li>
                <li>Корпус: ' . $housing . '</li>
                <li>Квартира: ' . $apartment . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Комментарии: ' . $comment . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Перезвонить?: ' . $disturb . '</li>
            </ul>
        </body>
    </html>
 
    ';
    
    $headers = "From: Админ сайта бургеров <nespi@list.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n".
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('vera.hurko@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        echo 'mail';
        // $data['status'] = 'OK';
        // $data['mes'] = 'Письмо отправлено';
    } else {
        $data['status'] = 'NO';
        $data['mes'] = 'На сервере произошла ошибка';
    }
?>