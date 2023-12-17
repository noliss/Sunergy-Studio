<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    if (!empty($name) && !empty($phone)) {
        // Далее идет код для отправки почты
        // ...
        // Если отправка прошла успешно, вернуть успешный ответ
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Заполните все поля"]);
    }
}
?>