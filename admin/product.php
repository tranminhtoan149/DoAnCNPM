
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sản phẩm</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./vendor/css/bootstrap.min.css">

    <link href="./css/manager.css" rel="stylesheet">

    <script src="./vendor/js/jquery-3.6.0.min.js "></script>
    <script src="./vendor/js/popper.min.js "></script>
    <script src="./vendor/js/bootstrap.bundle.min.js "></script>
    <script src="./vendor/js/bootstrap.min.js "></script>
    <script src="./vendor/js/fontawesome.min.js "></script>

</head>

<body>  
<nav class="navbar navbar-expand-sm align-center justify-content-between border-bottom border-2">
        <div class="logo" onclick = "gohome()">
        <i class="far fa-arrow-alt-circle-left"></i>
            <span class="buy_me_first">Back</span>
        </div>
        <div class="dropbtn-account">
            <i class="far fa-user-circle"></i>
            <i class="fa fa-caret-down"></i>
            <div id="dropdown-account" class="dropdown-account">
                <div>Tài Khoản</div>
                <div>Đăng Xuất</div>
            </div>
        </div>
    </nav>

<div id="Update" class="tabcontent menu__product">
            <hr>
            <form class="d-flex flex-wrap bg-light justify-content-center was-validated" action="./api/product/change.php" method="post" enctype="multipart/form-data">
                <div class="border border-2 col-8 col-md-6">
                    <img id="image" src="" class="container">
                </div>
                <div class="m-2 flex-grow-1">
                  <div class="input-group mb-3">
                      <span class="input-group-text">Tên sản phẩm:</span>
                      <input type="text" class="form-control" name="product_name" id="product_name">
                  </div>
                  
                  <div class="input-group mb-3">
                      <span class="input-group-text">Loại:</span>
                      <select class="form-select" id="product_type" name="product_type">
                        <option value="laptop" id="laptop">Laptop</option>
                        <option value="smartphone" id="smartphone">Điện Thoại</option>
                        <option value="watch" id="watch">Đồng Hồ</option>
                        <option value="accessory" id="accessory">Phụ Kiện</option>
                      </select>
                      <input type="hidden" class="form-control" name="product_id" id="product_id">
                  </div>
                  
                  <div class="input-group mb-3">
                      <span class="input-group-text">Màu sắc:</span>
                      <input type="text" class="form-control" name="product_color" id="product_color">
                      
                  </div>
                  
                  <div class="input-group mb-3">
                      <span class="input-group-text">Đơn giá:</span>
                      <input type="text" class="form-control" name="product_price" id="product_price" required>
                      
                  </div>
                  
                  <div class="input-group mb-3">
                      <span class="input-group-text">Số lượng:</span>
                      <input type="text" class="form-control" name="product_quantity" id="product_quantity" required>
                      
                  </div>
                  
                  <div class="my-3">
                    <span class="input-group-text">Mô tả:</span>
                      <textarea class="form-control" rows="7" name="product_description" id="product_description"></textarea>
                  </div>
                    
                    <button type="button" class="btn-add mx-2" data-bs-toggle="modal" data-bs-target="#Capnhat"><i class="fas fas fa-pencil-alt" style="font-size:20px"></i> CẬP NHẬT</button>
                    <button type="button" class="btn-add" data-bs-toggle="modal" data-bs-target="#Xoa"> <i class="fas fa-trash-alt" style="font-size:20px"></i> XÓA</button>
                </div>
                  
                <div class="modal fade" id="Capnhat">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header d-flex justify-content-center">
                                CẬP NHẬT
                            </div>
                            <div class="modal-body">
                                Chắc chắn:
                            </div>
                            <div class="modal-footer">
                                <input type="submit" name="update" class="btn btn-success" data-bs-dismiss="modal" value="Chắc chắn">
                                <div type="" class="btn btn-danger" data-bs-dismiss="modal">Quay lại</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="Xoa">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header d-flex justify-content-center">
                                XÓA
                            </div>
                            <div class="modal-body">
                                Chắc chắn:
                            </div>
                            <div class="modal-footer">
                                <input type="submit" name="delete" class="btn btn-success" data-bs-dismiss="modal" value="Chắc chắn">
                                <div type="" class="btn btn-danger" data-bs-dismiss="modal">Quay lại</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    
</body>
<script>
    function get_product(id) {
        fetch("./api/product/show.php?id="+id)
        .then(res => res.json())
        .then(data=>{
            console.log(data[0]._id);
            document.getElementById('product_id').value = data[0]._id;
            document.getElementById('product_name').value = data[0].name;
            document.getElementById(data[0].type).setAttribute("selected","selected");
            document.getElementById('product_color').value = data[0].color;
            document.getElementById('product_price').value = data[0].price;
            document.getElementById('product_quantity').value = data[0].quantity;
            document.getElementById('product_description').value = data[0].description;
            document.getElementById('image').src = "../images/" + data[0].src;
        })
        .catch(error => console.log(error));
    }

get_product(<?php echo $_GET['id'];?>);

    function gohome(){
        window.location = "./index.html"
    }

</script>
</html>