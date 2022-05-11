<?php
    header('Access-Control-Allow-Origin:*');
    //header('Content-Type: application/json');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization, X-Requested-With');

class Product{
    public $conn;

    public $id;
    public $name;
    public $type;
    public $color;
    public $price;
    public $quantity;
    public $description;
    public $src;

    function __construct(){
        $this->conn = new mysqli('localhost', 'root', '', 'dbdoancnpm');
    }

    public function show(){
        $query = $this->conn->query("SELECT * FROM product WHERE _id='{$this->id}' LIMIT 1");
        $row = $query->fetch_assoc();

        $this->name = $row['name'];
        $this->type = $row['type'];
        $this->color = $row['color'];
        $this->price = $row['price'];
        $this->quantity = $row['quantity'];
        $this->description = $row['description'];
        $this->src = $row['srcDetail'];
    }

    public function insert(){
        $query = "INSERT INTO product (_id, name, type, color, price, quantity, description, src, srcDetail)
                    VALUES ({$this->id},'{$this->name}', '{$this->type}', '{$this->color}',{$this->price},{$this->quantity},'{$this->description}','{$this->src}','item_detail{$this->id}.jpg')
                ";
        $stmt = $this->conn->query($query);
        return $stmt;
    }

    public function read(){
        $query = "SELECT * FROM product ORDER BY _id ASC";
        $stmt = $this->conn->query($query);
        return $stmt;
    }

    public function update(){
        $query = "UPDATE product 
                SET 
                    name = '{$this->name}', 
                    type = '{$this->type}', 
                    color = '{$this->color}',
                    price = {$this->price},
                    quantity = {$this->quantity},
                    description = '{$this->description}'
                WHERE _id = {$this->id}
                ";
        $stmt = $this->conn->query($query);
        return $stmt;
    }

    public function delete(){
        $query = "DELETE FROM product WHERE _id = {$this->id}";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    
}

?>