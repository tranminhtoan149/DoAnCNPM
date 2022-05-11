<?php
include_once("model.php");

$product = new Product();

$query = $product->conn->query("SELECT _id FROM product ORDER BY _id ASC");

$product->id = 1;
while ($row = $query->fetch_assoc()) {
    if ($product->id != $row['_id']) break;
    else $product->id++;
};

$product->name = $_POST['product_name'];
$product->type = $_POST['product_type'];
$product->color = $_POST['product_color'];
$product->price = $_POST['product_price'];
$product->quantity = $_POST['product_quantity'];
$product->description = $_POST['product_description'];
$product->src = "item" . $product->id . '.jpg';

if ($product->insert()) {
    $target_dir = "../../../images/";
    $target_file = $target_dir . 'item' . $product->id . '.jpg';
    move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
    echo "<script> alert('Đã thêm thành công');
            window.location = '../../index.html';
            </script>";
} else {
    echo "<script> alert('Có lỗi');
            window.location = '../../index.html';
            </script>";
}
