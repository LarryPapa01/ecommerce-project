import React, {useContext} from "react"
import { ShopContext } from "../../context/shop-context"
import { PRODUCTS } from "../../products"
import { CartItem } from "./cart-item"
import "./cart.css"
import {useNavigate} from "react-router-dom"


export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
   const totalAmount = getTotalCartAmount()
   const navigate = useNavigate()
console.log (totalAmount)
    return (
        <div className="cart">
        <div>
            <h1> Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }

            })}

        </div>

        {totalAmount > 0 ? (
        <div className="checkout">
            <p> Subtotal: £{totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button onClick={() => navigate("/")}>Checkout</button>
        </div>
        ) : (
            <h1> Your Shopping Cart is Empty</h1>
        )}
        </div>

    )
}