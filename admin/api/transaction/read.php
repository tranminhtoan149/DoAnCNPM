<?php
header('Access-Control-Allow-Origin:*');
//header('Content-Type: application/json');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization, X-Requested-With');


$conn = new mysqli('localhost', 'root', '', 'dbdoancnpm');
$query = "SELECT * FROM `transaction`";

$read = $conn->query($query);

if ($read->num_rows > 0) {
    $transaction_array = [];
    while ($row = $read->fetch_assoc()) {
        $transaction_item = [
            '_id' => $row['_id'],
            'name' => $row['name'],
            'price' => $row['price'],
            'quantity' => $row['quantity']
        ];
        array_push($transaction_array, $transaction_item);
    }
    echo json_encode($transaction_array);
}
