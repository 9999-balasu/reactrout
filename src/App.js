import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Regis from './components/Regis';
import Products from './components/Products';
import Nav from './components/Nav';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Nav/>
<Routes>
  <Route path="/login" element ={<Login/>}/>
  <Route path="/regis" element ={<Regis/>}/>
  <Route path="/products" element ={<Products/>}/> 
</Routes>

  </BrowserRouter>
  );
}

export default App;
