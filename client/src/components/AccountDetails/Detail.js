import React, { useContext, useRef } from "react";
import { AuthController } from "../../context/AuthController";
import axios from "axios";
import "./acount-detail.css";

function Detail(props) {
    const { user, setUser } = useContext(AuthController);
    const nameRef = useRef("");
    const phoneNumberRef = useRef("");
    const addressRef = useRef("");
    const birthRef = useRef("");
    const nationalityRef = useRef("");
    const cityRef = useRef("");
    const handleProfileButton = function () {
        axios({
            method: "post",
            url: "http://localhost/doan/client/server/index.php",
            data: {
                controller: "Account",
                action: "changeProfile",
                data: {
                    name: nameRef.current.value,
                    phoneNumber: phoneNumberRef.current.value,
                    address: addressRef.current.value,
                    birth: birthRef.current.value,
                    nationality: nationalityRef.current.value,
                    city: cityRef.current.value,
                    username: user.username,
                },
            },
        })
            .then(function (response) {
                document.cookie = "username" + "=" + JSON.stringify(response.data.user);
                setUser(response.data.user);
            })
            .catch(function (response) {
                console.log("error");
            });
    };
    return (
        <div className="Acount-detail">
            <div className="container rounded">
                <div className="row">
                    <div className="col-md-5 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_CX76HpPcBlyWvY68VpyqaWJAlteX8MhS2qGNJMd8klWwMQ&s" alt="" />

                            <span className="text-black-50">{user.username}</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-7 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Thông tin tài khoản</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <label className="labels">Tên</label>
                                    <input type="text" className="form-control" ref={nameRef} defaultValue={user.name} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Số điện thoại</label>
                                    <input type="text" className="form-control" ref={phoneNumberRef} defaultValue={user.phonenumber ? user.phonenumber : "Chưa có"} />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Địa chỉ</label>
                                    <input type="text" className="form-control" ref={addressRef} placeholder="Địa chỉ" defaultValue={user.address ? user.address : "Chưa có"} />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Ngày sinh</label>
                                    <input type="date" className="form-control" ref={birthRef} defaultValue={user.birth} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Quốc tịch</label>
                                    <input type="text" className="form-control" ref={nationalityRef} placeholder="Viet Nam" defaultValue={user.nationality ? user.nationality : "Chưa có"} />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Tỉnh/Thành phố</label>
                                    <input type="text" className="form-control" ref={cityRef} placeholder="Ho Chi Minh" defaultValue={user.city ? user.city : "Chưa có"} />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn profile-button" type="button" onClick={handleProfileButton}>
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
