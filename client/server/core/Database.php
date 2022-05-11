<?php
class Database
{
    public $conn;
    protected $hostname = 'localhost';
    protected $username = 'root';
    protected $password = '';
    protected $dbname = 'dbdoancnpm';
    //connect to db
    function __construct()
    {
        $this->conn = mysqli_connect($this->hostname, $this->username, $this->password, $this->dbname) or die('Can\'t connect to database');
        mysqli_set_charset($this->conn, 'utf8');
    }
    function query($sql)
    {
        return mysqli_query($this->conn, $sql);
    }
    function get_item($sql)
    {
        $data = array();
        $result = $this->query($sql);
        if ($result && mysqli_num_rows($result)) {
            $data = mysqli_fetch_assoc($result);
        }
        return $data;
    }
    function get_all_item($sql)
    {
        $data = array();
        $result = $this->query($sql);
        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
        }
        return $data;
    }
    function __destruct()
    {
        if ($this->conn) {
            mysqli_close($this->conn);
        }
    }
}
