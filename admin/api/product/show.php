<?php 
    include_once ("model.php");

    $product = new Product();

    $product->id = isset($_GET['id'])? $_GET['id']:die();

    $product->show();
    $product_item = [
        '_id' => $product->id,
        'name' => $product->name,
        'type' => $product->type,
        'color' => $product->color,
        'price' => $product->price,
        'quantity' => $product->quantity,
        'description' => $product->description,
        'src' => $product->src
    ];

    $product_array = [];
    array_push($product_array, $product_item);
    echo json_encode($product_array);
?>