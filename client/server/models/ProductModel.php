<?php
class ProductModel extends Database
{
    function getProduct($id)
    {
        $data = array();
        $id = (int)$id;
        $sql = "SELECT * FROM product WHERE id ='$id'";
        $data = $this->get_item($sql);
        return $data;
    }
    function getAllProduct()
    {
        $data = array();
        $sql = "SELECT * FROM product where quantity > 0";
        $data = $this->get_all_item($sql);
        return $data;
    }
    function decreaseQuantity($id, $quantityNew)
    {
        $quantity = 0;
        $sql = "SELECT * from product where _id = {$id}";
        $result = $this->get_item($sql);
        if ($result) {
            $quantity = (int)$result['quantity'];
        }
        $quantity -= $quantityNew;
        $sql = "UPDATE product set quantity = {$quantity} where _id = {$id}";
        $this->query($sql);
    }
}
