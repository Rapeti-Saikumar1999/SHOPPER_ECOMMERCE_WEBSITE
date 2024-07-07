import React, { createContext, useContext, useState } from "react"
import all_product from "../Components/Assets/all_product"


const ShopContext = createContext(null);
const getDefaultCart = ()=>
    {
        let cart ={};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index]=0;
        }
        return cart;
    }

const ShopContextProvider = ({children})=>
    {
        const [cartItems,SetCartItems] = useState(getDefaultCart());
     
        const AddToCart =(ItemId)=>
            {
             SetCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
            }
            const RemoveFromCart =(ItemId)=>
                {
                 SetCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
                }


            const GetTotalCartAmount=()=>
                {
                    let total =0;
                    for(const item in cartItems)
                        {
                            if(item>0)
                                {
                                        let ItemInfo = all_product.find((e)=>e.id===Number(item));
                                        total+=ItemInfo.new_price*cartItems[item];
                                }
                        }

                        return total;
                }

                const getTotalCartItems =()=>
                    {
                        let total =0;
                        for(const items in cartItems)
                            {
                                if(items>0)
                                    {
                                        total+=cartItems[items];
                                    }
                            }

                        return total;
                    }
        const contextValue={all_product,cartItems,AddToCart,RemoveFromCart,GetTotalCartAmount,getTotalCartItems};
        return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
    }

export default ShopContextProvider;

export const ShopContextData =()=>
{
return useContext(ShopContext);
}



