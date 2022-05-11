<?php
class AccountModel extends Database
{
    //set Account
    private $level_account = 2;
    function setAccount($username, $password, $name, $birthday)
    {

        $sql = "INSERT INTO account_info(username,password,level,name,birth) VALUES ('$username','$password','$this->level_account','$name','$birthday')";
        return $this->query($sql);
    }
    function check_account_taken($username)
    {
        return ($this->get_account($username)) ? 'Tên tài khoản đã được sử dụng. Hãy thử tên khác.' : 'valid';
    }
    function get_account($username)
    {
        $sql = "SELECT * FROM account_info WHERE username ='$username'";
        return $this->get_item($sql);
    }
    function change_profile($name, $phoneNumber, $address, $birth, $nationality, $city, $username)
    {
        $sql = "UPDATE account_info SET name ='{$name}',phoneNumber ='{$phoneNumber}',address ='{$address}',birth ='{$birth}',nationality ='{$nationality}',city ='{$city}' where username ='{$username}'";
        $this->query($sql);
        return $sql;
    }
}
