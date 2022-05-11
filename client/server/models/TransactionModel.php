<?php
class TransactionModel extends Database
{
    function addNew($id, $name, $price, $quantity)
    {
        if ($this->checkItem($id)) {
            $quantity += $this->checkItem($id);
            $sql = "UPDATE transaction SET quantity={$quantity} where _id ={$id}";
            $this->query($sql);
        } else {
            $sql = "INSERT INTO transaction(_id,name,price,quantity) values ({$id},'{$name}',{$price},{$quantity})";
            $this->query($sql);
        }
    }
    function checkItem($id)
    {
        $quantity = 0;
        $sql = "SELECT * from transaction where _id = {$id}";
        $result = $this->get_item($sql);
        if ($result) {
            $quantity = (int)$result['quantity'];
        }
        return $quantity;
    }
}
