import { Link, useHistory } from "react-router-dom";
import React from "react";
import { AuthController } from "../../context/AuthController";
import { useContext, useEffect, useState } from "react";
import { ProductController } from "../../context/ProductController";

const Navbar = (props) => {
    const { cartItems } = useContext(ProductController);
    const { isLogin, setIsLogin, setUser } = useContext(AuthController);
    const history = useHistory();

    const [styles, setStyles] = useState({
        boxShadow: "",
        backgroundColor: "white",
        height: "90px",
    });
    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                setStyles({ boxShadow: "0 1px 3px rgb(50 50 50 / 40%)", backgroundColor: "#7790d9", height: "80px" });
            } else {
                setStyles({ boxShadow: "", backgroundColor: "white", height: "90px" });
            }
        });
    }, []);

    const handleLogout = () => {
        document.cookie = "username" + "= 123; expires=Tue, 23 Nov 2021 12:00:00 UTC";
        setIsLogin(false);
        setUser(null);
        history.replace("/");
    };

    return (
        <div
            id="navbar"
            className="fixed-top d-flex row-remove"
            style={{
                boxShadow: styles.boxShadow,
                backgroundColor: styles.backgroundColor,
                height: styles.height,
                transition: "smooth",
            }}
        >
            <img id="nav-logo" src="/images/buymeFirst-1.png" alt="" className="logo col-3" />

            <div className="main-routes d-flex justify-content-center col-5">
                <div className="d-flex">
                    <Link to="/">
                        <i className="fas fa-home">&nbsp;</i>Trang chủ
                    </Link>
                </div>
            </div>

            <div className="auth-routes d-flex col-4 justify-content-end">
                <div className="cart-btn">
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fas fa-shopping-cart" style={{ position: "relative" }}>
                            {cartItems.length > 0 ? <span style={{ color: "red", position: "absolute", top: "-10px", right: "-10px" }}>{cartItems.length}</span> : null}
                        </i>
                    </button>
                </div>

                {!isLogin ? (
                    <>
                        <div className="">
                            <Link to="/sign-in">
                                {" "}
                                <i id="icon-sign-in" class="fas fa-sign-in-alt"></i>
                                <div id="text-sign-in">Đăng nhập</div>
                            </Link>
                        </div>
                        <div className=" ">
                            <Link to="/sign-up">
                                <i id="icon-register" class="fas fa-edit"></i>
                                <div id="text-register">Đăng ký</div>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="far fa-user"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <div className="dropdown-item">
                                    <Link to="/account-details">Thông tin tài khoản</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link to="/" onClick={handleLogout}>
                                        Đăng xuất
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
