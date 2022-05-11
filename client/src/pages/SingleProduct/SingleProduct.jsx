import Details from '../../components/ItemDetail/ItemDetail'
import { useState,useEffect,useContext } from 'react';
import {ProductController} from "../../context/ProductController";



const SingleProduct = props => {
    const { products } = useContext(ProductController);
    const [product,setProduct]=useState(null)
    useEffect(() => {
        let foundProducts = products.filter(item => item._id === props.match.params.id);
        if (foundProducts.length > 0)
            setProduct(foundProducts[0]);
    }, [products,product,props.match.params.id])

    return product !== null ?<Details product={product} />  : <div className="spinner-border mx-auto" role="status"> 
    <span class="sr-only">No item found</span>
    </div>;
   
}

export default SingleProduct;