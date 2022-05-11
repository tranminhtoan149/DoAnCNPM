import { useContext, useState, useEffect } from "react";
import { ProductController } from "../../context/ProductController";
import useModal from "../ItemModal/useModal";
import ItemModal from "../ItemModal/ItemModal";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();

const MenuItem = ({ productsInMenu }) => {
    const { changeProductAmountInCart } = useContext(ProductController);
    const [productTypes, setproductTypes] = useState([]);
    const { isShowing, toggle, setProduct, data } = useModal();
    productsInMenu.forEach((product) => {
        if (productTypes.indexOf(product.type) === -1) setproductTypes([...productTypes, product.type]);
        productTypes.sort();
    });

    useEffect(() => {
        if (isShowing) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isShowing]);

    const handleOnClick = (product) => {
        setProduct(product);
        toggle();
    };
    const history = useHistory();

    function redirectTo(id) {
        history.replace("/single-product/" + id);
    }
    return (
        <div className="menu-item d-flex justify-content-center">
            <div className="row">
                {productTypes.map((productType) => (
                    <div key={productType} className="product-type col-12" id={productType}>
                        <div className="type ">{productsInMenu.some((product) => product.type === productType) && <span>{productType}</span>}</div>
                        <div className="row col-lg-12 col-12">
                            {productsInMenu.map((product) =>
                                product.type === productType ? (
                                    <div key={product._id} className="product-container col-12 col-md-6 col-lg-4 justify-content-center mb-5" data-aos="zoom-in-up">
                                        <div className="product-item">
                                            <div className="product-image" onClick={() => redirectTo(product._id)}>
                                                <img src={"http://localhost/doan/images/" + product.src} alt={product.alt} />
                                            </div>
                                            <div className="product-info">
                                                <div className="product-name">{product.name}</div>
                                                <span className="product-cost">{product.price}$</span>
                                            </div>
                                            <div className="product-bottom">
                                                <a className="cart-text" href="/">
                                                    Chi tiết
                                                </a>
                                                <a className="cart-text" href="/">
                                                    Thêm
                                                </a>
                                                <i onClick={() => changeProductAmountInCart(product, 1)} className="fas fa-plus"></i>
                                                <i onClick={() => handleOnClick(product)} className="fas fa-info"></i>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <ItemModal isShowing={isShowing} hide={toggle} itemDetail={data} toggle={redirectTo} add={changeProductAmountInCart} />
            
        </div>
    );
};

export default MenuItem;
