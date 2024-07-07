import React from 'react'
import "./CartItems.css"
import { ShopContextData } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
function CartItems() {
 const {all_product,AddToCart,RemoveFromCart,cartItems,GetTotalCartAmount} = ShopContextData();
  return (
    <div className='cart-items'> 
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
        <hr />
        
          {all_product.map((e)=>
          {
            if(cartItems[e.id]>0)
              {
                return <div>
                  <div className="cartItems-format cartItems-format-main">
                    <img src={e.image} className='cartIcon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartsItemsQuantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className="cartIcon-remove-icon"src={remove_icon} alt="" onClick={()=>RemoveFromCart(e.id)}/>
                    </div>
                    <hr />
                    </div>
              }

              return null;
          })}

          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-items">
                  <p>Subtotal</p>
                  <p>${GetTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-items">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />

                <div className="cartitems-total-items">
                  <p>Total</p>
                  <p>${GetTotalCartAmount()}</p>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
 
            <div className="cartsitem-promocode">
              <p>If you have promocode, Enter it here</p>
              <div className="cartitem-promobox">
                <input type="text" placeholder="promocode"name="" id="" />
                <button>Submit</button>
              </div>
            </div>
          </div>
       

    </div>
  )
}

export default CartItems
