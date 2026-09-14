import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({})

  // Add product to cart
  const addToCart = (itemId) => {

    setCartItems((prev) => ({
      ...prev,

      [itemId]: (prev[itemId] || 0) + 1
    }))
  }


  // Completely remove product from cart
  const removeFromCart = (itemId) => {

    setCartItems((prev) => {

      const updatedCart = { ...prev }

      delete updatedCart[itemId]

      return updatedCart
    })
  }


  // Increase quantity by 1
  const increaseQuantity = (itemId) => {

    setCartItems((prev) => ({
      ...prev,

      [itemId]: (prev[itemId] || 0) + 1
    }))
  }


  // Decrease quantity by 1
  const decreaseQuantity = (itemId) => {

    setCartItems((prev) => {

      const currentQuantity = prev[itemId] || 0

      // If quantity is already 1,
      // remove the product completely
      if (currentQuantity <= 1) {

        const updatedCart = { ...prev }

        delete updatedCart[itemId]

        return updatedCart
      }

      return {
        ...prev,

        [itemId]: currentQuantity - 1
      }
    })
  }


  // Calculate total cart amount
  const getTotalCartAmount = () => {

    let totalAmount = 0

    for (const itemId in cartItems) {

      const quantity = cartItems[itemId]

      const product = all_product.find(
        (item) => item.id === Number(itemId)
      )

      if (product) {
        totalAmount += product.new_price * quantity
      }
    }

    return totalAmount
  }


  // Calculate total number of items
  const getTotalCartItems = () => {

    let totalItems = 0

    for (const itemId in cartItems) {

      totalItems += cartItems[itemId]
    }

    return totalItems
  }


  const contextValue = {

    all_product,

    cartItems,

    addToCart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    getTotalCartAmount,

    getTotalCartItems
  }


  return (

    <ShopContext.Provider value={contextValue}>

      {props.children}

    </ShopContext.Provider>

  )
}

export default ShopContextProvider