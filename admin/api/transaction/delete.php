
<?php
//header('Access-Control-Allow-Origin:*');
//header('Content-Type: application/json');
//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
//header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization, X-Requested-With');

$conn = new mysqli('localhost', 'root', '', 'dbdoancnpm');
$query = "DELETE FROM transaction";
if ($conn->query($query)) {
    echo "<script> alert('Đã xóa');
            window.location = '../../index.html';
        </script>";
}
?>
