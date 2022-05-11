import axios from "axios";
import { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

const url = "http://localhost/doan";
const Form = (props) => {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const rePasswordRef = useRef("");
    const nameRef = useRef("");
    const birthRef = useRef(Date);
    const [warningTextPwd, setWarningTextPwd] = useState("");
    const [warningTextUsrN, setWarningTextUsrN] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const history = useHistory();

    function handleOnClick(event) {
        event.preventDefault();
        if (!warningTextPwd && !warningTextUsrN && usernameRef.current.value && usernameRef.current.value && nameRef.current.value && birthRef.current.value) {
            const user_regiser = {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                name: nameRef.current.value,
                birthday: birthRef.current.value,
            };
            // console.log(user_regiser);
            axios({
                method: "post",
                url: url+ "/client/server/index.php",
                data: {
                    controller: "Account",
                    action: "Register",
                    data: user_regiser,
                },
            })
                .then(function (response) {
                    //handle success
                    if (response.data) {
                        setShowSuccess(true);
                        setTimeout(() => {
                            history.replace("/sign-in");
                        }, 500);
                    } else console.log("failed");
                })
                .catch(function (response) {
                    //handle error
                    console.log("error");
                });
            // setIsLogin(true);
            // history.replace('/');
        }
    }

    function changeTypeOfInput(event) {
        event.currentTarget.type = "date";
        event.currentTarget.focus();
    }

    var setTimePwd = null;
    function handleRepassword() {
        clearTimeout(setTime);
        setTimePwd = setTimeout(() => {
            if (rePasswordRef.current.value) {
                if (rePasswordRef.current.value !== passwordRef.current.value) setWarningTextPwd("Mật khẩu không khớp");
                else setWarningTextPwd("");
            }
        }, 500);
    }

    var setTime = null;
    function handleSetUsername(event) {
        clearTimeout(setTime);
        setTime = setTimeout(() => {
            axios({
                method: "post",
                url: "http://localhost/doan/client/server/index.php",
                data: {
                    controller: "Account",
                    action: "CheckUsername",
                    data: event.target.value,
                },
            })
                .then(function (response) {
                    //handle unvalid
                    if (response.data !== "valid") {
                        setWarningTextUsrN(response.data);
                    } else {
                        setWarningTextUsrN("");
                    }
                    // setIsLogin(true);
                })
                .catch(function (response) {
                    //handle error
                    console.log("error");
                });
        }, 500);
    }
    return (
        <form action="" className="auth-form">
            <h2>Đăng ký</h2>
            <div className="input-icons">
                <i className="fas fa-user icon"></i>
                <input className="input-field" type="text" placeholder="Tài khoản" ref={usernameRef} onChange={handleSetUsername} />
            </div>

            <div className="input-icons">
                <i className="fas fa-key icon"></i>
                <input className="input-field" type="password" placeholder="Mật khẩu" name="password" ref={passwordRef} onChange={handleRepassword} />
            </div>

            <div className="input-icons">
                <i className="fas fa-key icon"></i>
                <input className="input-field" type="password" placeholder="Nhập lại mật khẩu" onChange={handleRepassword} ref={rePasswordRef} />
                <br />
            </div>

            <div className="input-icons">
                <i className="fas fa-user icon"></i>
                <input className="input-field" type="text" placeholder="Tên" ref={nameRef} />
            </div>

            <div className="input-icons">
                <i className="icon text-uppercase"></i>
                <input placeholder="Ngày sinh" type="text" onFocus={changeTypeOfInput} className="input-field" ref={birthRef} />
            </div>
            {setWarningTextPwd === "" ? null : <span className="text-danger mb-2">{warningTextPwd}</span>}
            {setWarningTextUsrN === "" ? null : <span className="text-danger mb-2">{warningTextUsrN}</span>}
            <button className="signin-btn btn-primary" onClick={handleOnClick}>
                Đăng ký{" "}
            </button>
            {showSuccess && (
                <div class="alert alert-success mt-2">
                    <strong>Đăng kí tài khoản thành công!</strong>
                </div>
            )}
        </form>
    );
};

export default Form;
