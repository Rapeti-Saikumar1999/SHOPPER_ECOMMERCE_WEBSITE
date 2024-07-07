import React from 'react';
import "./CSS/ShopCategory.css";
import {ShopContextData} from "../Context/ShopContext"
import drop_down_icon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item/Item';
function ShopCategory(props) {
  const {all_product} = ShopContextData();

  return (
    
    <div className='shop-category'>
      <img src={props.banner} alt="" className='shopcategory_banner' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-short">
          Short by <img src={drop_down_icon} alt=""/>
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((e,i)=>
        {
          if(props.category===e.category)
            {
              return <Item key={e.id} id={e.id}  image={e.image}  name={e.name} new_price={e.new_price} old_price={e.old_price} />
            }
            else{
              return null
            }
        })}
      </div>
      <div className="shopcategory-load-more">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
