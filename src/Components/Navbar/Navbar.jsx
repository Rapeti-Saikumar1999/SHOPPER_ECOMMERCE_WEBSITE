import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContextData } from '../../Context/ShopContext'
import { LoginData } from '../../Context/LoginAuth'
function Navbar() {
    const {user,Logout} = LoginData(); 
    const [Menu,setMenu] = useState("shop");
    const {getTotalCartItems} = ShopContextData();
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo-image"/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none',color:'#626262'}}to="/">Shop</Link>{Menu==="shop"&&<hr/>}</li>
            <li onClick={()=>setMenu("mens")}><Link  style={{textDecoration:'none',color:'#626262'}} to="/mens">Men</Link>{Menu==="mens"&&<hr/>}</li>
            <li onClick={()=>setMenu("womens")}><Link  style={{textDecoration:'none',color:'#626262'}} to="/womens">Women</Link>{Menu==="womens"&&<hr/>}</li>
            <li onClick={()=>setMenu("kids")}><Link  style={{textDecoration:'none',color:'#626262'}} to={"/kids"}>Kids</Link>{Menu==="kids"&&<hr/>}</li>
        </ul>
        <div className="nav-login-cart">
            {
                user.name&&user.email ? <Link to="/login"><button onClick={()=>Logout()}>Logout</button></Link> : <Link to="/login"><button>Login</button></Link>
            }
            
            {
                user.name && user.email ? <Link to="/cart"><img src={cart_icon} alt="cart-icon"/></Link> : <Link><img src={cart_icon} alt="cart-icon"/></Link>
            }
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
