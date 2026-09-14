import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import './CSS/Product.css'

const Product = () => {

  const { productId } = useParams()
  const { all_product,addToCart } = useContext(ShopContext)

  const product = all_product.find(
    (item) => item.id === Number(productId)
  )

  const [selectedSize, setSelectedSize] = useState('')
  const [showCartPopup, setShowCartPopup] = useState(false)

  const handleAddToCart = () => {

    // Add product to global cart
    addToCart(product.id)
   // Show popup
    setShowCartPopup(true)
   // Hide popup after 2 seconds
    setTimeout(() => {
      setShowCartPopup(false)
    }, 2000)
  }

  if (!product) {
    return <h2 className="product-not-found">Product Not Found</h2>
  }
  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        HOME <span>›</span>
        SHOP <span>›</span>
        {product.category} <span>›</span>
        {product.name}
      </div>

      <div className="product-display">
        {/* LEFT SIDE */}
        <div className="product-images">
          {/* Small Images */}
          <div className="product-thumbnail-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          {/* Main Image */}
          <div className="product-main-image-container">
            <img src={product.image} alt={product.name}className="product-main-image" />
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="product-info">
          <h1>{product.name}</h1>
          {/* Rating */}
          <div className="product-rating">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="inactive-star">★</span>
            <p>(122)</p>
          </div>
          {/* Price */}
          <div className="product-price">
            <span className="old-price">
              ${product.old_price}
            </span>
            <span className="new-price">
              ${product.new_price}
            </span>
          </div>


          {/* Description */}
          <p className="product-description">
            A lightweight, usually knitted, pullover shirt,
            close-fitting and with a round neckline and short sleeves,
            worn as an undershirt or outer garment.
          </p>

          {/* Select Size */}
          <div className="product-size-section">
            <h3>Select Size</h3>
            <div className="product-sizes">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? 'size-btn active-size'
                      : 'size-btn'
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>


          {/* Add To Cart */}
          
          <button className="add-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
          {/* Category */}
          <div className="product-extra-info">
            <p>
              <strong>Category:</strong>
              {' '}
              {product.category}
            </p>

            <p>
              <strong>Tags:</strong>
              {' '}
              Modern, Latest
            </p>
          </div>
        </div>

      </div>
      {showCartPopup && (
      <div className="cart-popup">
        <span className="cart-popup-check">✓</span>
        <div>
          <strong>Added to Cart!</strong>
          <p>{product.name}</p>
        </div>
      </div>
      )}
    </div>
  )
}

export default Product