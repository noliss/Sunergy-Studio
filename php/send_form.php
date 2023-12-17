<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  if (!empty($name) && !empty($phone)) {
    $to = "info@sunergystudio.ru";
    $subject = "Заявка с сайта sunergystudio";
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
      <p>Имя: $name</p>
      <p>Телефон: $phone</p>
      <table>
        <tr>
          <th>Имя</th>
          <th>Телефон</th>
        </tr>
        <tr>
          <td>$name</td>
          <td>$phone</td>
        </tr>
      </table>
      </body>
      </html>
      ";
    $headers = "From: info@sunergystudio.ru";

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