import SignIn from './SignIn/SignIn';
import SignUp from "./SignUp/SignUp";
import HomePage from "./Home/HomePage";
import UserDetails from "./UserDetails/UserDetails";
import SingleProduct from './SingleProduct/SingleProduct';
import Checkout from './Checkout/Checkout';

export default [

    {
        path: '/',
        exact: true,
        public: true,
        component: HomePage
    },
    {
        path: '/sign-in',
        exact: true,
        public: true,
        component: SignIn
    },
    {
        path: '/sign-up',
        exact: true,
        public: true,
        component: SignUp
    },
    {
        path: '/account-details',
        exact: true,
        public: true,
        component: UserDetails
    },
    {
        path: '/single-product/:id',
        exact: true,
        public: true,
        component: SingleProduct
    },
    {
        path: '/checkout',
        exact: true,
        public: true,
        component: Checkout
    }
];