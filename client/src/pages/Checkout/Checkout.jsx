import CheckoutCart from "../../components/Checkout/CheckoutCart";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import Toast from "../../components/Checkout/Toast";

const Checkout = props => {




    return (

        <div className='row col-8 mx-auto pb-5'>
            <div className='col-md-7 col-lg-8'>
                <CheckoutForm></CheckoutForm>
            </div>
            <div className='col-md-5 col-lg-4'>
                <CheckoutCart></CheckoutCart>
            </div>
            
        </div>
    )
}

export default Checkout;