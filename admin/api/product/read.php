<?php

    include_once("model.php");

    $product = new Product();
    
    $read = $product->read();

    if ($read->num_rows>0){
        $product_array = [];
        
        while ($row = $read->fetch_assoc()){
            $product_item = [
                '_id' => $row['_id'],
                'name' => $row['name'],
                'type' => $row['type'],
                'color' => $row['color'],
                'price' => $row['price'],
                'quantity' => $row['quantity'],
                'description' => $row['description'],
                'src' => $row['src'],
            ];
            array_push($product_array, $product_item);
        }

        echo json_encode($product_array);
    }
    
?>