import { useContext, useEffect, useState } from "react";
import { ProductController } from "../../context/ProductController";
import Category from "../../components/Home/Category";
import MenuItem from "../../components/Home/MenuItem";
import Banner from '../../components/Banner/Banner'
const Home = props => {

    const {products} = useContext(ProductController);
    const [productsInMenu, updateProductsInMenu] = useState([]);
    const [filterValue, changeFilterValue] = useState("");

    useEffect(() =>
    { 
      
      let items = products.filter(item => {
          
          return filterValue === '' || item.name.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) !== -1;
          }
        );
        
        updateProductsInMenu(items);
    }
    
    , [filterValue, products]);




    return <>
    <Banner />
    <div id='main-menu' className='main-menu col-10 d-flex' style={{paddingTop:'70px'}}> 
        
    <Category changeFilterValue = {changeFilterValue}/>
    {    products.length > 0 ? <MenuItem productsInMenu = {productsInMenu.length === 0 && filterValue === ''? products : productsInMenu}/>  
          
        : <div class="spinner-border mx-auto" role="status"> 
        <span class="sr-only">No item found</span>
        </div>
    }
  </div>;
  </>
}

export default Home;