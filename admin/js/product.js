function show_product(type){
    var type_name = '';
    _type = type;
    if (type=="laptop") type_name="Laptop";
    if (type=="smartphone") type_name="Điện Thoại"; 
    if (type=="watch") type_name="Đồng Hồ"; 
    if (type=="accessory") type_name="Phụ kiện"; 
    document.getElementById('type_name').innerHTML = type_name;
    fetch("../admin/api/product/read.php")
    .then(res => res.json())
    .then(data=>{
        let return_product = ``;
        for (product of data)
            if(product.type == type)
        {
            return_product+=`<div class="product__item col-10 col-sm-5 col-lg-4" >
                                <div class="col-6 product__image">
                                  <img src='../images/${product.src}' alt="">
                                </div>
                                <div class="col-6 product__info">
                                    <div class="product__name justify-content-around text-center">
                                        <div>${product.name}</div>
                                    </div>
                                    <div class="product__quantity"> Số lượng: <strong style="font-size: 25px; color: rgb(238, 75, 75);">${product.quantity}</strong></div>
                                    <i class="fas fa-info-circle" onclick="detail(${product._id})" style="font-size: 30px"></i>
                                </div>
                            </div>`
        }
        document.getElementById('product__list').innerHTML = return_product;
    })
    .catch(error => console.log(error));
}

var _type = "laptop";
show_product(_type);
function repe(){
  show_product(_type);
}

setInterval(repe, 5000);



function detail(id){
  window.location = "./product.php?id="+id;
}

function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-type')) {
      var dropdowns = document.getElementsByClassName("dropdown-type");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }