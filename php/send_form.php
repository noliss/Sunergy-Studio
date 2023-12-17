<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  if (!empty($name) && !empty($phone)) {
    $to = "info@sunergystudio.ru";
    $subject = "=?utf-8?B?" . base64_encode("Заявка с сайта sunergystudio.ru") . "?=";
    $message = "
      <html>
      <head>
      <style>
      table {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      th {
        background-color: #f2f2f2;
      }
      </style>
      </head>
      <body>
      <p>Новая заявка sunergystudio.ru</p>
      <table>
        <tr>
          <th>Имя</th>
          <th>Номер телефона</th>
        </tr>
        <tr>
          <td>$name</td>
          <td>$phone</td>
        </tr>
      </table>
      </body>
      </html>
      ";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8";
    $headers .= "From: info@sunergystudio.ru";

    if (mail($to, $subject, $message, $headers)) {
      echo json_encode(["success" => true]);
    } else {
      echo json_encode(["success" => false, "message" => "Ошибка при отправке почты"]);
    }
  } else {
    echo json_encode(["success" => false, "message" => "Заполните все поля"]);
  }
}
?>