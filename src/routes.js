import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () =>{
      return(
        <BrowserRouter>
         <Header />
            <Switch> 
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route component={NotFound} />
            </Switch>
          <Footer />
        </BrowserRouter>
      )
}

export default Routes;