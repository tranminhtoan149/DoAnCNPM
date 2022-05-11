<?php
class Product extends Controller
{
    function getAllProduct()
    {
        $product = $this->model("ProductModel");
        echo json_encode($product->getAllProduct());
    }

}
