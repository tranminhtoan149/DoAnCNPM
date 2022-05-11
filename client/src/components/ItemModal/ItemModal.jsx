import "./ItemModal.css";
import React from "react";
import ReactDOM from "react-dom";

const ItemModal = ({ itemDetail, isShowing, hide, toggle, add }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div id="modal-detail" className="modal-datail ">
                      <div className="modal-dialog ">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">
                                      Thông tin sản phẩm
                                  </h5>
                                  <button onClick={hide}> &#10005;</button>
                              </div>
                              <div className="modal-body">
                                  <div className="row">
                                      <div className="body-img col-md-4">
                                          <img src={"http://localhost/doan/images/" + itemDetail.src} alt={itemDetail.alt} />
                                      </div>
                                      <div className=" col-md-8">
                                          <div className="row info ">
                                              <div className="col-3">
                                                  <h5>SKU</h5>
                                                  <p>{itemDetail.quantity}</p>
                                              </div>
                                              <div className="col-6">
                                                  <h5>Name</h5>
                                                  {itemDetail.name}
                                              </div>
                                              <div className="col-3">
                                                  <h5>Price</h5>
                                                  <p>{itemDetail.price}</p>
                                              </div>
                                          </div>
                                          <div className="title-description">
                                              <h5> Description</h5>
                                          </div>
                                          <div className="description">
                                              <p>{itemDetail.description}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="modal-footer">
                                  <button onClick={() => add(itemDetail)} className="add-to-cart">
                                      {" "}
                                      <i class="fas fa-shopping-cart"></i>Thêm vào giỏ hàng
                                  </button>
                                  <button onClick={() => toggle(itemDetail._id)} className="more-info">
                                      {" "}
                                      <i class="fas fa-info"></i> Xem chi tiết sản phẩm
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body
          )
        : null;

export default ItemModal;
