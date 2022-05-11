<?php

use function PHPSTORM_META\type;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
require_once "core/Controller.php";
require_once "core/Database.php";
require_once "core/Session.php";
require_once "core/role.php";

// get controller and action
$data = json_decode(file_get_contents("php://input"), TRUE);
$controller =  $data['controller'];
$action = $data['action'];

//import controller object
require_once "controllers/" . 'c_' . $controller . ".php";
$controller = new $controller;


$param = array();
if (isset($data['data'])) {
    if (is_array($data['data'])) {
        $param = $data['data'] ? array_values($data['data']) : [];
    } else {
        $param = $data['data'] . ' ';
        $param = explode(' ', $param);
        array_pop($param);
    }
}

//

// //call acction
call_user_func_array([$controller, $action], $param);
