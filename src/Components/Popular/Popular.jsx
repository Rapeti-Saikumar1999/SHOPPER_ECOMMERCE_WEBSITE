import React from 'react'
import "./Popular.css"
import data_product from "../Assets/data"
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {
                data_product.map((e)=>
                {
                    return <Item key={e.id} id={e.id}  image={e.image}  name={e.name} new_price={e.new_price} old_price={e.old_price} />
                })
            }
        </div>
      
    </div>
  )
}

export default Popular
