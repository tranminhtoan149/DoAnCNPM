<?php
class Checkout extends Controller
{
    function UpdateDatabase($data)
    {
        $transaction = $this->model("TransactionModel");
        $product = $this->model("ProductModel");
        foreach ($data as $key => $val) {
            $transaction->addNew($val['_id'], $val['name'], $val['price'], $val['amount']);
            $product->decreaseQuantity($val['_id'], $val['amount']);
        }
    }
}
