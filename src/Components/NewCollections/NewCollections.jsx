import React from 'react'
import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Item from '../Item/Item'
function NewCollections() {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {
                new_collection.map((e)=>
                {
                    return <Item key={e.id} id={e.id}  image={e.image}  name={e.name} new_price={e.new_price} old_price={e.old_price} />
                })
            }
        </div>
      
    </div>
  )
}

export default NewCollections
