import "./ItemDetail.css";
import { useEffect, useContext, useState } from "react";
import { ProductController } from "../../context/ProductController";

function ItemDetail({ product }) {
    const { changeProductAmountInCart } = useContext(ProductController);
    const [amount, setAmount] = useState(1);
    useEffect(() => {
        document.body.style.overflow = "unset";
    }, []);
    const increaseAmount = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const decreaseAmount = () => {
        amount <= product.quantity ? setAmount(amount + 1) : setAmount(product.quantity);
    };
    return (
        <div id="item-detail" className="item-detail-container col-10">
            <div className="row">
                <div className="col-md-7 col-12" style={{ textAlign: "center" }}>
                    <img src={"http://localhost/doan/images/" + product.srcDetail} alt={product.alt} />
                </div>
                <div className="col-md-5 col-12">
                    <div className="row">
                        <div className="col-6">
                            {" "}
                            <h6>Tên sản phẩm:</h6>
                        </div>
                        <div className="col-6">
                            <p>{product.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {" "}
                            <h6>Xuất sứ</h6>
                        </div>
                        <div className="col-6">
                            <p>Việt Nam</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {" "}
                            <h6>Giá bán:</h6>
                        </div>
                        <div className="col-6">
                            <p>{product.price}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {" "}
                            <h6>Số lượng còn lại:</h6>
                        </div>
                        <div className="col-6">
                            <p>{product.quantity}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6>Chọn số lượng</h6>
                        </div>
                        <div className="col-6 choose-number">
                            <button onClick={increaseAmount}>-</button>
                            <button>{amount}</button>
                            <button onClick={decreaseAmount}>+</button>
                        </div>
                    </div>
                    <div className="row check-out">
                        <button className="add-to-cart" onClick={() => changeProductAmountInCart(product, amount)}>
                            <i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7 col-12" style={{ textAlign: "justify" }}>
                    <h5>Thông tin mô tả</h5>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
