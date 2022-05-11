const Category = props => {

    const handleOnChange = (event) =>
    {   
        props.changeFilterValue(event.target.value);
    }
    const handleScroll=(type)=>{
        document.getElementById(type).scrollIntoView();
    }


    return <div className="category col-3">
        <div className="row justify-content-between relative-fixed col-11">

            <div className="d-flex align-items-center col-12 mb-3">
                <div class="input-group d-flex col-12">
                    <div class="form-outline col-12">
                        <input type="search" id="form1" class="form-control" 
                        onChange={handleOnChange}
                        placeholder='Tìm kiếm sản phẩm'/>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-11 category-card mb-3" onClick={()=>handleScroll('accessory')}>
                <div className="content shadow p-3 bg-white rounded" >
                <i class="fas fa-mouse"></i>
                </div>
            </div>

            <div className="col-lg-6 col-11 category-card mb-3" onClick={()=>handleScroll('laptop')}>
                <div className="content shadow p-3 bg-white rounded" >
                <i class="fas fa-laptop"></i>
                </div>
            </div>

            <div className="col-lg-6 col-11 category-card mb-3" onClick={()=>handleScroll('watch')}>
                <div className="content shadow p-3 bg-white rounded" >
                <i class="far fa-clock"></i>
                </div>
            </div>

            <div className="col-lg-6 col-11 category-card mb-3" onClick={()=>handleScroll('smartphone')}>
                <div className="content shadow p-3 bg-white rounded" >
                <i class="fas fa-mobile-alt"></i>
                </div>
            </div>
            
    </div>
  </div>
}

export default Category;