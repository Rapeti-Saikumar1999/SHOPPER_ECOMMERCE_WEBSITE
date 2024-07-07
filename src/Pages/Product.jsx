import React from 'react'
import "./CSS/Product.css"
import {ShopContextData} from "../Context/ShopContext"
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
function Product() {
  const {all_product} = ShopContextData();
  const {productId} = useParams();
  const product = all_product.find((e)=>
  {
    return e.id===Number(productId);
  })
  return (
    <div className='product'>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts product={product}/>
      
    </div>
  )
}

export default Product
