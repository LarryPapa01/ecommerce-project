import React from "react";
import {createContext, useEffect, useState } from "react"
import { PRODUCTS } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i=1; i<=PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    console.log(cart)
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        console.log(cartItems)
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
               console.log(itemInfo)
                totalAmount +=cartItems[item] * itemInfo.price
           console.log(totalAmount)
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
       console.log(itemId)
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))

}
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount }))
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, }
    
return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
    
}