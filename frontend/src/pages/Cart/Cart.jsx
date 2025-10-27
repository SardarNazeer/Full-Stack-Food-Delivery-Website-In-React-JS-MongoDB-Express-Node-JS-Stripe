import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getDeliveryFee,
    getFinalTotal,
  } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = getDeliveryFee();
  const total = getFinalTotal();

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-titles">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {/* 🧾 Cart Items List */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-item-row">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p
                  className="cart-remove"
                  onClick={() => removeFromCart(item._id)}
                >
                  ❌
                </p>
              </div>
            );
          }
          return null;
        })}

        <hr />
      </div>

      {/* 🧮 Cart Bottom Section */}
      <div className="cart-bottom">
        <div className="cart-summary">
          <h3>Cart Summary</h3>

          <div className="cart-summary-details">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className="cart-summary-details">
            <p>Delivery Fee:</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>

          <hr />

          <div className="cart-summary-details total">
            <p><strong>Total:</strong></p>
            <p><strong>${total.toFixed(2)}</strong></p>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
