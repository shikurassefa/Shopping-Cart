import { useContext } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";
import { useCartStore } from "../stores/cartStore";
const Cart = () => {
  const navigate = useNavigate();
  const { cart, handleRemoveFromCart, getTotalQuantity } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>your cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>

        <Badge badgeContent={getTotalQuantity()} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </div>
      <div className="cart-item">
        <h3>items you have added</h3>
        {cart.map((product) => {
          return (
            <div className="carting" key={product.id}>
              <p className="title">{product.name}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
      <button className="checkout-btn" onClick={() => navigate("/Checkout")}>
        checkout
      </button>
    </div>
  );
};
export default Cart;
