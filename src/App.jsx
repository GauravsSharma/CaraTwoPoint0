import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ItemDetail from './pages/itemDetail/ItemDetail'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shopping from './pages/shopping/Shopping'
import CartPage from './pages/cartPage/CartPage'
import Profile from './pages/fiveInOneLayout/Profile'
// import CardSection from './components/cardSection/CardSection'
import FiveInOneLayout from './pages/fiveInOneLayout/FiveInOneLayout'
import GetOrders from './pages/cartPage/makeOrders/GetOrders'
import WishList from './pages/fiveInOneLayout/WishList'
import Orders from './pages/fiveInOneLayout/Orders'
import Address from './pages/fiveInOneLayout/Address'
import AdForm from './pages/fiveInOneLayout/AdForm'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Checking from "./Checking"
const App = () => {
  const [isNav,setNav] = useState(true);
  const [isFoot,setFoot] = useState(true);
 
  return (
    <>
      {isNav&&<Header/>}
      <Routes>
        <Route path='/' element={<Home setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/item-details/:id' element={<ItemDetail setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/blog' element={<Blog setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/about' element={<About setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/contact' element={<Contact setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/shopping/:category' element={<Shopping setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/checkout/cart' element={<CartPage setNav={setNav} setFoot={setFoot}/>}/>
        <Route path="/fiveinone" element={<FiveInOneLayout  setNav={setNav} setFoot={setFoot}/>}>
          <Route path='wishlist' element={<WishList setNav={setNav} setFoot={setFoot}/>}/>
          <Route path='orders' element={<Orders setNav={setNav} setFoot={setFoot}/>}/>
          <Route path='address' element={<Address setNav={setNav} setFoot={setFoot}/>}/>
          <Route path='profile' element={<Profile setNav={setNav} setFoot={setFoot}/>}/>
        </Route>
        <Route path='/ad' element={<AdForm/>}/>
        <Route path='/login' element={<Login setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/signup' element={<Register setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/checkout' element={<GetOrders setNav={setNav} setFoot={setFoot}/>}/>
        <Route path='/check' element={<Checking setNav={setNav} setFoot={setFoot}/>}/>
      </Routes>
      {isFoot&&<Footer/>}
    </>
  )
}

export default App