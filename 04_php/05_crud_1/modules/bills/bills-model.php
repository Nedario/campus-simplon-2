<?php

include_once dirname(__FILE__) . "./../../libs/utility.php";
include_once dirname(__FILE__) . "./../users/users-model.php";

$db = connectDB("127.0.0.1", "base_test_1", "root", "@mysql");

enablePHPMaxErros();

function deleteBills($ids) {
    global $db;

    $sql = "DELETE FROM bills WHERE id = :id_bill";
    $query = $db->prepare($sql);
    $res = [];

    foreach($ids as $id) {
        $query->bindParam("id_bill", $id, PDO::PARAM_INT);
        $tmp = $query->execute();
        $res[] = (object)[
            "status" => $tmp,
            'id' => $id
        ];
    }

    return $res;
}

function createBill() {
    global $db;
    $sql = "INSERT INTO bills (id_user, total, created_at)
    VALUES (:id_user, :total, :created_at)";

    $query = $db->prepare($sql);
    $query->bindParam(":id_user", $_POST["id_user"], PDO::PARAM_STR);
    $query->bindParam(":total", $_POST["total"], PDO::PARAM_INT);
    $query->bindParam(":created_at", $_POST["created_at"], PDO::PARAM_STR);
    $res = $query->execute();
    return $db->lastInsertId();
}

function getBill($id) {
    global $db;
    $sql = "SELECT * FROM bills WHERE id = :id";

    $statement = $db->prepare($sql);
    $statement->bindParam(":id", $id, PDO::PARAM_INT);
    $status = $statement->execute();
    $bill = $statement->fetch(PDO::FETCH_OBJ);
    // récupérer les information de l'user facturé...
    // pour affichage des /nom/prénom
    $bill->user = getUser($bill->id_user);
    // debug($bill);
    return $bill;
}

function getBills() {
    global $db;
    $sql = "SELECT * FROM bills";
    $statement = $db->query($sql);
    $statement->execute();
    return $statement->fetchAll(PDO::FETCH_OBJ);
}

function updateBill($id_bill, $total, $updated_at) {
    global $db;
    $id_bill = (int)$id_bill;

    $sql = "UPDATE bills SET total = :total, created_at = :updated_at
    WHERE id = :id";

    $query = $db->prepare($sql);
    $query->bindParam(":id", $id_bill, PDO::PARAM_INT);
    $query->bindParam(":total", $total, PDO::PARAM_STR);
    $query->bindParam(":updated_at", $updated_at, PDO::PARAM_STR);

    return $query->execute();
}
