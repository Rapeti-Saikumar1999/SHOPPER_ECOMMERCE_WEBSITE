import React from 'react'
import "./RelatedProducts.css"
import { ShopContextData } from '../../Context/ShopContext'
import Item from "../Item/Item"
function RelatedProducts(props) {
  const {product} = props;
  const {all_product} = ShopContextData();
  const relatedProducts = all_product.filter((e)=>
  {
    return e.category===product.category;
  })
  return (
    <div className='related-products'>
      <h1>Related Products</h1>
      <hr/>
      <div className="related-products-item">
        {
          relatedProducts.map((e,index)=>
          {
            if(index<4)
              {
                return <Item key={e.id} id={e.id}  image={e.image}  name={e.name} new_price={e.new_price} old_price={e.old_price} />
              }
          })
        }
      </div>
    </div>
  )
}

export default RelatedProducts
