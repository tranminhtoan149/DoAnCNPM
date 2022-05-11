import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export const ProductController = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const delMsg = "Đã xoá ra khỏi giỏ hàng";
    const incWarningMsg = "Bạn không thể thêm quá số lượng cho phép";
    const decWarningMsg = "Số lượng không thể âm, nếu muốn xoá hãy chọn biểu tượng thùng rác";
    const addMsg = "Đã thêm sản phẩm vào giỏ hàng";

    const notifySuccess = (msg) => toast.success('🦄 ' + msg, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyWarning = (msg) => toast.warning('🦄 ' + msg, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });


    useEffect(() => {
        axios({
            method: "post",
            url: "http://localhost/doan/client/server/index.php",
            dataType: "json",
            data: {
                controller: "Product",
                action: "getAllProduct",
            },
        })
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (response) {
                //handle error
                console.log("error");
            });
    }, []);

    const changeProductAmountInCart = (product, bonus = 1) => {
        const foundItems = cartItems.filter((cartItem) => cartItem._id === product._id);
       
        if (foundItems.length > 0) {
            foundItems[0].amount *= 1;
            foundItems[0].amount += bonus;
            
            if (foundItems[0].amount > product.quantity)
                notifyWarning(incWarningMsg);
            else if (foundItems[0].amount < 0)
                notifyWarning(decWarningMsg);
            else {
                notifySuccess(addMsg);
            }
            foundItems[0].amount = foundItems[0].amount > product.quantity ? product.quantity : foundItems[0].amount;

            foundItems[0].amount = foundItems[0].amount > 0 ? foundItems[0].amount : 0;
            
            setCartItems([...cartItems]);
        } else {
            bonus = bonus > 0 ? bonus : 0;
            if (bonus <= product.quantity) {
                let item = { ...product, amount: bonus };
                setCartItems([...cartItems, item]);
                notifySuccess(addMsg);
            }
        }
    };

    const getTotal = () => {
        let sum = 0;

        cartItems.forEach((item) => (sum += item.price * item.amount));

        return sum;
    };

    const removeCartItem = (item) =>
    {
        const newCartItems = cartItems.filter(cartItem => cartItem._id !== item._id);

        setCartItems([...newCartItems]);
        
        notifySuccess(delMsg);
    }

    const data = {
        products,
        setProducts,
        cartItems,
        changeProductAmountInCart,
        getTotal,
        removeCartItem,
        setCartItems
    };

    return <ProductController.Provider value={data}>{children}
        <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />  
        </ProductController.Provider>;
};

export default ProductProvider;
