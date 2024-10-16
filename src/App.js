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


/*import './App.css';
import { BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import ProductListing from './components/ProductListing.js';
import Footer from './components/Footer.js';
import Cart from './components/Cart.js';
import Login from './components/Login.js'
import Regis from './components/Regis.js'
import BlogList from './components/BlogList.js';

function App() {
  return (


   
   <BrowserRouter>
 
   <li><Link to="/">Home</Link></li>
   <li><Link to="/cart">Cart</Link></li>
   <li><Link to="/regis">Register</Link></li>
   <li><Link to="/productListing">Products</Link></li>
   <li><Link to="/blog">BlogList</Link></li>
  
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




    <Route path = '/blog' element ={
<div>

<Header/>
<BlogList/>
<Footer/>

</div>
    }></Route>
     </Routes>
   </BrowserRouter> 
   
  );
}

export default App;*/

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import ProductListing from './components/ProductListing.js';
import Footer from './components/Footer.js';
import Cart from './components/Cart.js';
import Login from './components/Login.js';
import Regis from './components/Regis.js';
import BlogList from './components/BlogList.js';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Menu */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-yellow-400 transition-colors">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/regis" className="hover:text-yellow-400 transition-colors">
              Register
            </Link>
          </li>
          <li>
            <Link to="/productListing" className="hover:text-yellow-400 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-yellow-400 transition-colors">
              BlogList
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Login />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/cart"
            element={
              <div>
                <Header />
                <Cart />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/productListing"
            element={
              <div>
                <Header />
                <ProductListing />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/regis"
            element={
              <div>
                <Header />
                <Regis />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/blog"
            element={
              <div>
                <Header />
                <BlogList />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
