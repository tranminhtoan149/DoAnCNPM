import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductController } from "../../context/ProductController";

const Cart = (props) => {
    const { cartItems, changeProductAmountInCart } = useContext(ProductController);

    return (
        <div className="modal fade mt-5" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content pt-2">
                    <div className="modal-header col-11 mx-auto">
                        <h2 className="title d-flex justify-content-between col-11">
                            Giỏ hàng
                            <span className="">{cartItems.length} món hàng</span>
                        </h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body col-11 mx-auto">
                        <div className="cart-item-list">
                            {cartItems.map((item) => (
                                <div className="cart-item d-flex" key={item._id}>
                                    <div className="col-2 d-flex p-2">
                                        <img src={"http://localhost/doan/images/" + item.src} alt="" />
                                    </div>

                                    <div className="info col-5 d-flex flex-column text-center p-2">
                                        <h2>{item.name}</h2>
                                        <p>
                                            ${item.price} x {item.amount}
                                        </p>
                                    </div>

                                    <div className="col-5 mod-item-container">
                                        <div className="mod-item col-11">
                                            <i className="fas fa-minus col-4 text-center text-white" onClick={() => changeProductAmountInCart(item, -1)}></i>
                                            <span className="col-4 text-center">{item.amount}</span>
                                            <i className="fas fa-plus col-4 text-center text-white" onClick={() => changeProductAmountInCart(item, 1)}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="modal-footer col-11 mx-auto">
                        <button className="btn btn-checkout col-12">
                            <Link to="/checkout">Thanh toán</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
