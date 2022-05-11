<?php 
    include_once ("model.php");

    $product = new Product();

    $product->id = $_POST['product_id'];
    $product->name = $_POST['product_name'];
    $product->type = $_POST['product_type'];
    $product->color = $_POST['product_color'];
    $product->price = $_POST['product_price'];
    $product->quantity = $_POST['product_quantity'];
    $product->description = $_POST['product_description'];

    if (isset($_POST['update'])) {
        if ($product->update()){
        move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
        echo "<script> alert('Cập nhật thành công');
            window.location = '../../index.html';
            </script>";
        }
        else {
            echo "<script> alert('Có lỗi. Quay về trang chủ');
                window.location = '../../index.html';
                </script>";
        }
    }
    
    else if (isset($_POST['delete'])) {
        if ($product->delete()){
            echo "<script> alert('Đã thêm thành công');
                window.location = '../../index.html';
                </script>";
        }
        else {
            echo "<script> alert('Có lỗi. Quay về trang chủ');
                window.location = '../../index.html';
                </script>";
        }
    }
    
    header("Location: ../../index.html");
    
?>