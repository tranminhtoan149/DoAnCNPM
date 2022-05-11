<?php


class Account extends Controller
{

    function Register($username, $password, $name, $birthday)
    {
        $account = $this->model('AccountModel');
        echo ($account->setAccount($username, $password, $name, $birthday));
    }
    function CheckUsername($username)
    {
        $account = $this->model("AccountModel");
        echo $account->check_account_taken($username);
    }
    function Login($username, $password)
    {
        $account = $this->model('AccountModel');
        $result = $account->get_account($username);
        if (!$result) {
            echo json_encode(array('message' => 'Tài khoản không tồn tại'));
        } else if (($password) != $account->get_account($username)['password']) {
            set_logged($username);
            echo json_encode(array('message' => 'Mật khẩu không đúng'));
        } else {
            echo json_encode(array('message' => 'valid', 'user' => $result));
        }
    }
    function changeProfile($name, $phoneNumber, $address, $birth, $nationality, $city, $username)
    {
        $account = $this->model('AccountModel');
        $account->change_profile($name, $phoneNumber, $address, $birth, $nationality, $city, $username);
        $user = $account->get_account($username);
        echo json_encode(array(
            'user' => $user
        ));
    }
}
