<?php
// if (!defined('IN_SITE')) die('The request not found');



require_once "Session.php";

function is_logged()
{
    return isset($_SESSION['token_user']) ? $_SESSION['token_user'] : false;
}
function set_logged($username)
{
    ss_set('token_user', $username);
}
function is_admin()
{
    $user = is_logged();
    if ($user) {
        if ($user['level'] == 1) {
            return true;
        } else return false;
    }
}
function doLogout()
{
    if (isset($_SESSION['token_user'])) {
        unset($_SESSION['token_user']);
    }
}
