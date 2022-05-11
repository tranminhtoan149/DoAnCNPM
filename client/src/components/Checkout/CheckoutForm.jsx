import { ProductController } from "../../context/ProductController";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = (props) => {
    const { cartItems, setCartItems } = useContext(ProductController);
    const [user, setUser] = useState([]);
    const successStatus = "THANH TOÁN THÀNH CÔNG!";
    const failStatus = "THANH TOÁN THẤT BẠI!";
    const delayTime = 1000;
    const notify = (statusText) => {
        if (statusText === failStatus) {
            toast.warning("🦄 " + statusText, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success("🦄 " + statusText, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                history.replace("/");
            }, delayTime);
        }
    };
    const history = useHistory();

    const handleCheckout = () => {
        axios({
            method: "post",
            url: "http://localhost/doan/client/server/index.php",
            data: {
                controller: "Checkout",
                action: "UpdateDatabase",
                data: {
                    cart: cartItems,
                },
            },
        })
            .then(function (response) {
                setCartItems([]);
                notify(successStatus);
            })
            .catch(function (response) {
                notify(failStatus);
            });
    };
    useEffect(() => {
        if (document.cookie.split("username=")[1]) {
            setUser(JSON.parse(document.cookie.split("username=")[1]));
        }
    }, []);
    return (
        <div id="checkout-payment">
            <h4 className="">Địa chỉ thanh toán</h4>
            <div className="needs-validation" novalidate="">
                <div className="row g-3">
                    <div className="col-sm-12">
                        <label for="lastName" className="form-label">
                            Tên
                        </label>
                        <input type="text" className="form-control" id="lastName" placeholder="" defaultValue={user.name} required="" />
                    </div>

                    <div className="col-12">
                        <label for="phoneNumber" className="form-label">
                            Số điện thoại
                        </label>
                        <input type="number" className="form-control" id="phoneNumber" defaultValue={user.phonenumber} />
                    </div>

                    <div className="col-12">
                        <label for="address" className="form-label">
                            Địa chỉ
                        </label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" defaultValue={user.address} />
                    </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Phương thức thanh toán</h4>

                <div className="my-3">
                    <div className="form-check">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="credit">
                            Credit card
                        </label>
                    </div>
                    <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="debit">
                            Debit card
                        </label>
                    </div>
                    <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="paypal">
                            PayPal
                        </label>
                    </div>
                </div>

                <div className="row gy-3">
                    <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                            Tên
                        </label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                        <small className="text-muted">Tên đầy đủ được in trên thẻ</small>
                    </div>

                    <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                            Số thẻ
                        </label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                        <div className="invalid-feedback">Credit card number is required</div>
                    </div>

                    <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                            Ngày hết hạn
                        </label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                        <div className="invalid-feedback">Expiration date required</div>
                    </div>

                    <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                            CVV
                        </label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                        <div className="invalid-feedback">Security code required</div>
                    </div>
                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" id="liveToastBtn" onClick={handleCheckout}>
                    Thanh toán
                </button>
            </div>
        </div>
    );
};

export default CheckoutForm;
