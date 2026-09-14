import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/Cart.css'

const Cart = () => {

  const {

    all_product,

    cartItems,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    getTotalCartAmount

  } = useContext(ShopContext)


  // Get only those products which exist in the cart
  const cartProducts = all_product.filter(
    (product) => cartItems[product.id] > 0
  )


  return (

    <div className="cart">

      <h1>Your Shopping Cart</h1>


      {/* EMPTY CART */}

      {cartProducts.length === 0 ? (

        <div className="empty-cart">

          <h2>Your cart is empty</h2>

          <p>
            Add some products to your cart.
          </p>

        </div>

      ) : (

        <>

          {/* CART HEADER */}

          <div className="cart-header">

            <p>Product</p>

            <p>Title</p>

            <p>Price</p>

            <p>Quantity</p>

            <p>Total</p>

            <p>Remove</p>

          </div>


          <hr />


          {/* CART PRODUCTS */}

          {cartProducts.map((product) => {

            const quantity = cartItems[product.id]

            const productTotal =
              product.new_price * quantity


            return (

              <div
                className="cart-row"
                key={product.id}
              >


                {/* Product Image */}

                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-product-image"
                />


                {/* Product Name */}

                <p className="cart-product-name">
                  {product.name}
                </p>


                {/* Product Price */}

                <p>
                  ${product.new_price}
                </p>


                {/* Quantity */}

                <div className="cart-quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    -
                  </button>


                  <span>
                    {quantity}
                  </span>


                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>

                </div>


                {/* Total */}

                <p className="cart-product-total">

                  $
                  {productTotal.toFixed(2)}

                </p>


                {/* Remove */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  ✕
                </button>

              </div>

            )
          })}


          {/* CART TOTAL SECTION */}

          <div className="cart-bottom">

            <div className="cart-total">

              <h2>Cart Totals</h2>


              <div className="cart-total-row">

                <p>Subtotal</p>

                <p>
                  ${getTotalCartAmount().toFixed(2)}
                </p>

              </div>


              <hr />


              <div className="cart-total-row">

                <p>Shipping</p>

                <p>Free</p>

              </div>


              <hr />


              <div className="cart-total-row grand-total">

                <p>Total</p>

                <p>
                  ${getTotalCartAmount().toFixed(2)}
                </p>

              </div>


              <button className="checkout-btn">

                PROCEED TO CHECKOUT

              </button>

            </div>

          </div>

        </>

      )}

    </div>

  )
}

export default Cart