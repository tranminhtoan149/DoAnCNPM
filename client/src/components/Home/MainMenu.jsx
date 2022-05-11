
import Category from "./Category";
import MenuItem from "./MenuItem";
import Banner from "../Banner/Banner";

const MainMenu = props => {


    return (
        <div>
            <Banner/>
    <div id="main-menu" className='main-menu col-10 d-flex'>
        <Category />
        <MenuItem />
    </div>
        </div>
    )
}

export default MainMenu;