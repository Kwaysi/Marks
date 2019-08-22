<?php

require './database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if ($data) {

    $sql = "INSERT INTO Table (name,email)
    VALUES (?,?)";

    $stmt = $db->prepare($sql);

    $stmt->bindParam(1, $data->name);
    $stmt->bindParam(2, $data->email);

    if ($stmt->execute()) {
        echo 'Success';
    }

}
