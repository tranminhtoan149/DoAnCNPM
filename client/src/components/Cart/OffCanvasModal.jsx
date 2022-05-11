import { ProductController } from "../../context/ProductController";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./OffCanvas.css";

const OffCanvasModal = (props) => {
    const { cartItems, changeProductAmountInCart, getTotal, removeCartItem} = useContext(ProductController);

    return (
        <div className="offcanvas offcanvas-end pb-3 mt-4 p-3" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ height: "80%" }}>
            <div className="offcanvas-header">
                <h3 id="offcanvasRightLabel" className="text-main">
                    Giỏ hàng của bạn
                </h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body border border-1 pt-2 mb-3">
                <div className="w-100 ">
                    {cartItems.map((item) => (
                        <div className="cart-item d-flex mb-3 flex-column flex-lg-row" key={item._id}>
                            <div className="col-12 col-lg-3 px-1 d-flex justify-content-center">
                                <img src={"http://localhost/doan/images/" + item.src} alt="" className="img-fluid w-100 border border-1 w-100" />
                            </div>

                            <div className="info px-1 col-12 col-lg-5 d-flex align-content-between flex-column mb-2">
                                <div className="">
                                    <h2>{item.name}</h2>
                                    <p className='text-black-50'>
                                        ${item.price} x {item.amount}
                                    </p>
                                </div>
                                <div className='d-flex align-content-center'>
                                <button className='btn btn-danger' onClick={() => removeCartItem(item)}>
                                    <i className="fas fa-trash text-white"></i>    
                                </button>
                            </div>
                            </div>

                            <div className="col-12 col-lg-4 px-1 mod-item-container">
                                <div className="mod-item col-12">
                                    <i className="fas fa-minus col-4 text-center text-white" onClick={() => changeProductAmountInCart(item, -1)}></i>
                                    <span className="col-4 text-center">{item.amount}</span>
                                    <i className="fas fa-plus col-4 text-center text-white" onClick={() => changeProductAmountInCart(item, 1)}></i>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

            <h3 className="text-main mb-3">Total: ${getTotal()}</h3>
            <button className="btn btn-checkout col-12 mx-auto" data-bs-dismiss="offcanvas">
                <Link to="/checkout">Thanh toán</Link>
            </button>
        </div>
    );
};

export default OffCanvasModal;
