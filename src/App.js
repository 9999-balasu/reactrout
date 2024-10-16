/*import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Regis from './components/Regis';
import Products from './components/Products';
import Nav from './components/Nav';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Data from './components/Data.js'

function App() {
  return (
  <BrowserRouter>
  
  <Nav/>
<Routes>
  <Route path="/login" element ={<Login/>}/>
  <Route path="/regis" element ={<Regis/>}/>
  <Route path="/products" element ={<Products/>}/> 
  <Route path="/productlisting" element ={<ProductListing/>}/> 
  <Route path="/data" element ={<Data/>}/> 
</Routes>

  </BrowserRouter>
  );
}

export default App;*/


import './App.css';
import { BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import ProductListing from './components/ProductListing.js';
import Footer from './components/Footer.js';
import Cart from './components/Cart.js';
import Login from './components/Login.js'
import Regis from './components/Regis.js'

function App() {
  return (


   
   <BrowserRouter>
 
   <li><Link to="/">Home</Link></li>
   <li><Link to="/cart">Cart</Link></li>
   <li><Link to="/regis">Register</Link></li>
   <li><Link to="/productListing">Products</Link></li>
  
   <Routes>
    <Route path = '/' element ={
<div>

<Header/>
<Login/>
<Footer/>

</div>
    }></Route>

<Route path = '/cart' element ={
<div>
<Header/>
<Cart/>
<Footer/>


</div>
    }>
      
    </Route>



    <Route path = '/productListing' element ={
<div>
<Header/>
<ProductListing/>
<Footer/>


</div>
    }>
      
    </Route>
    <Route path = '/regis' element ={
<div>
<Header/>
<Regis/>
<Footer/>


</div>
    }>
      
    </Route>
     </Routes>
   </BrowserRouter> 
   
  );
}

export default App;

