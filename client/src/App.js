import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import AuthProvider from "./context/AuthController";
import ProductProvider from "./context/ProductController";
import ScrollToTop from "./behavior/ScrollToTop";
import routes from './pages/routes';
// import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer"
import './styles/Navbar.css';
import './styles/Form.css';
import './styles/MainMenu.css';

import OffCanvasModal from "./components/Cart/OffCanvasModal";


function App() {
  
  return (
    <AuthProvider>
    <ProductProvider>
    <BrowserRouter>
    <Navbar />

    <OffCanvasModal />
    <ScrollToTop>
    <div className='main ' style={{marginTop:'70px'}}>
    <Switch> 
      { [
        ...routes.map(route => 
          <Route exact path={route.path} component={route.component}></Route>
        )
        ]
      }
    </Switch>
    
    </div>
    </ScrollToTop>
    <Footer />
    </BrowserRouter>
    </ProductProvider>
    </AuthProvider>
  );
}

export default App;
