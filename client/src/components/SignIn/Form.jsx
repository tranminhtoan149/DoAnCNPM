import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthController } from "../../context/AuthController";
import axios from "axios";
const Form = (props) => {
    const [showError, setShowError] = useState("");
    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const { setIsLogin, setUser } = useContext(AuthController);
    const history = useHistory();

    function handleOnClick(event) {
        event.preventDefault();

        if (userNameRef.current.value && passwordRef.current.value) {
            axios({
                method: "post",
                url: "http://localhost/doan/client/server/index.php",
                data: {
                    controller: "Account",
                    action: "Login",
                    data: {
                        username: userNameRef.current.value,
                        password: passwordRef.current.value,
                    },
                },
            })
                .then(function (response) {
                    if (response.data.message !== "valid") {
                        setShowError(response.data.message);
                        setTimeout(() => {
                            setShowError("");
                        }, 1000);
                    } else {
                        setIsLogin(true);
                        setUser(response.data.user);
                        if (response.data.user.level == 1) {
                            window.location.href = "http://localhost/doan/admin/index.html";
                        } else {
                            document.cookie = "username" + "=" + JSON.stringify(response.data.user);
                            history.replace("/");
                        }
                    }
                })
                .catch(function (response) {
                    console.log("error");
                });
        } else {
            setShowError("Mời bạn nhập đầy đủ tài khoản và mật khẩu!");
            setTimeout(() => {
                setShowError("");
            }, 1000);
        }
    }

    return (
        <>
            <form action="" className="auth-form">
                <h2>Đăng nhập</h2>
                <div className="input-icons">
                    <i className="fas fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Tài khoản" ref={userNameRef} />
                </div>

                <div className="input-icons">
                    <i className="fas fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Mật khẩu" ref={passwordRef} />
                </div>

                <button className="signin-btn btn-primary" onClick={handleOnClick}>
                    Đăng nhập
                </button>

                <div className="suggest-box d-flex">
                    <p className="d-inline">Chưa có tài khoản ?</p>
                    <button className="btn btn-primary">
                        <Link to="/sign-up">Đăng ký</Link>
                    </button>
                </div>
                {showError && (
                    <div class="alert alert-danger mt-2 faded">
                        <strong>{showError}</strong>
                    </div>
                )}
            </form>
        </>
    );
};

export default Form;
