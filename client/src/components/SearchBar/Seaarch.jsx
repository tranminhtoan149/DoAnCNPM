import React from "react";
import { useContext,useState,useEffect } from "react";
import { ProductController } from "../../context/ProductController";


function SearchBar(props) {
    const handleFilterTextChange = () => {
        props.onFilterTextChange(document.querySelector('#data-search-input').value);
    }
    const handleKeyDown = (e)=> {
        if (e.key === 'Enter') {
            props.handleOnClick();
          }
    }
    return (
        <div className="search-bar">
            <div >
                <input 
                    type="text"  
                    className="search-input p-1" 
                    id="data-search-input" 
                    placeholder="Search" 
                    defaultValue={props.filterText}
                    onChange={handleFilterTextChange}
                    onKeyDown={handleKeyDown}
                
                />
            </div>
            <a href="#main-menu"><i className="fas fa-search ms-1"  onClick={props.handleOnClick}> </i></a>
        </div>
    );
}

function Search(){
    const {setProducts } = useContext(ProductController);
    const [searchProducts,setSearchProducts] = useState([])
    const [filterText,setFilterText] =useState('')
    
    useEffect(() => {  
        fetch('https://mysterious-caverns-04457.herokuapp.com/product?fbclid=IwAR2WygSH4EIkoCEbDXgS17MEZhKNERCb2T2RE9l-z_T5i-TU8jm6fkp3VFc')
            .then(response => response.json())
            .then(res=>
                setSearchProducts(res)
            )
    },[])

    const onFilterTextChange = (value)=> {
        setFilterText(value)
    }
    const handleOnClick=()=>{
        const filterProduct= searchProducts.filter((product)=>{
            return product.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1
            })
        setProducts(filterProduct)
    }
    return (
        <React.Fragment>
           <SearchBar 
                filterText={filterText}
                onFilterTextChange={onFilterTextChange}
                handleOnClick={handleOnClick}
           />
        </React.Fragment>
    )
}

export default Search;