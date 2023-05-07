import './App.css';
import Header from './components/header/header';
import Productpage from './components/productPage/Productpage';
import { Routes,Route, useParams } from 'react-router-dom';
import ItemW from './components/itemWithInfo/ItemW';
import Footer from './components/footer/Footer';

import Register from './components/register/Register';
import Home from './components/home/Home';

import CheckOut from './components/checkout/Checkout';
import HomePage from './components/control-panel/home-page/HomePage';

import { connect } from 'react-redux';
import { ControlPanel } from './redux/user/user.selector';
function App({ControlPanel}) {
 
  console.log(ControlPanel);

  return (
    <div className="App">
      

      {ControlPanel  ?
      '':
      <Header></Header>
      
    }
      
      <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route  path='/product' element={<Productpage/>}  />
        <Route  path='/item' element={<ItemW/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='/checkout' element={<CheckOut/>}  />
        <Route  path='/Controlpanel/:id' element= {<HomePage/>} />
      </Routes>

      {ControlPanel ?
      '':
      <Footer></Footer>
      }
      

    </div>
  );
}

const mapStateProp = (state) =>({
  ControlPanel:ControlPanel(state)
})

const mapdispatchProp = (dispatch) => ({
  // openCart: cart => dispatch(openCart(cart)),
 
})

export default connect(mapStateProp,mapdispatchProp)(App);
