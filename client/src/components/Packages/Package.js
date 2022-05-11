import React from "react";
import "../../styles/package.css"

// const datas = [
//     {
//         name: "White Comfy Stool",
//         price: '100$',
//         src: 'https://templates.hibootstrap.com/ecop/default/assets/images/cart/cart1.png',
//         quantity: '1',
//         alt: "",
//         id:1
//     },
//     {
//         name: "White Comfy Stool",
//         price: '100$',
//         src: 'https://templates.hibootstrap.com/ecop/default/assets/images/cart/cart1.png',
//         quantity: '1',
//         alt: "",
//         id:2
//     }
// ]


function Package({data,onClick}) {


    return (
        <div id="modal-package">
            <div className="modal-package "  >
                <button type="button" className="btn-close" onClick={onClick}>X</button>
                <div className="modal-header">
                    <h2>Giỏ hàng</h2>
                    <h2 className="modal-num-product">2 sản phẩm</h2>
                </div>
                <div className="modal-body">
                   <div className="modal-list-product">
                   {
                        data.map(item => {
                            return (
                                <div key={item.id} className="modal-product-item">
                                    <div className="modal-product-image"><img src={item.src} alt={item.alt} /></div>
                                    <div className="modal-product-info">
                                        <div className="modal-product-name">{item.name}</div>
                                        <div className="modal-product-price">{item.price}</div>
                                    </div>
                                    <div className="modal-product-quantity">
                                        <button className="btn btn-primary">
                                            <span className="minus"> - </span>
                                            <input type="text" value={item.quantity} />
                                            <span className="plus"> + </span>
                                        </button>
                                        
                                    </div>
                                    <div className="close" >
                                            x
                                    </div>
                                </div>
                            )
                        })
                    }
                   </div>
                    <div className="modal-total">
                        <p>Tổng tiền</p>
                        <p>100.000 USD</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-modal-checkout">
                        <p>Proceed To Checkout
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

// function Package(props){
//     const [closeModal,setCloseModal] = useState(true);
//     const handleClose=()=> {
//         setCloseModal(!closeModal);
//     }
//     // const handleOpen=()=> {
//     //     setCloseModal(true)
//     // }

//     return (<React.Fragment>
//         {/* <button onClick={handleOpen}>Gio hang</button> */}
//        { closeModal && <Modal data={datas} onClick={handleClose}/> } 
//        </React.Fragment>
//     );
// }

export default Package;