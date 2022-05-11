import { useContext } from "react";
import { ProductController } from "../../context/ProductController";

const CheckoutCart = (props) => {
    const { cartItems, getTotal } = useContext(ProductController);
    return (
        <div id="checkout-card" className="relative-fixed">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-main">Giỏ hàng</span>
                <span className="badge bg-main rounded-pill">{cartItems.length}</span>
            </h4>

            <ul className="list-group mb-3">
                {cartItems.map((item) => (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">{item.name}</h6>
                            <small className="text-muted">
                                {item.price}x{item.amount}
                            </small>
                        </div>
                        <span className="text-muted">${item.price * item.amount}</span>
                    </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>${getTotal()}</strong>
                </li>
            </ul>

            <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code" />
                    <button type="submit" className="btn btn-secondary">
                        Redeem
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutCart;
