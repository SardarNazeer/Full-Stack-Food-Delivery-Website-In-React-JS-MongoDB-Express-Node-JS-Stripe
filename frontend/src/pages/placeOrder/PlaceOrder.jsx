import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    getDeliveryFee,
    getFinalTotal,
  } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = getDeliveryFee();
  const total = getFinalTotal();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Order placed successfully!");
  };

  return (
    <div className="place-order">
      {/* LEFT SIDE: Delivery Form */}
      <div className="place-order-left">
        <p className="delivery-information">Delivery Information</p>
        <form onSubmit={handleSubmit}>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Street" required />

          <div className="multi-fields">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
          </div>

          <div className="multi-fields">
            <input type="text" placeholder="Zip Code" required />
            <input type="text" placeholder="Country" required />
          </div>

          <input type="text" placeholder="Phone" required />

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>

      {/* RIGHT SIDE: Cart Summary */}
      <div className="place-order-right">
        <div className="cart-summary">
          <h3>Cart Summary</h3>

          <div className="cart-summary-details">
            <p>Subtotal:</p>
            <p>Rs {subtotal.toFixed(2)}</p>
          </div>

          <div className="cart-summary-details">
            <p>Delivery Fee:</p>
            <p>Rs {deliveryFee.toFixed(2)}</p>
          </div>

          <div className="cart-summary-details total">
            <p>Total:</p>
            <p>Rs {total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
