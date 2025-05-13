
import { useCartStore } from "../stores/cartStore";
const CheckOut = () => {
  const { getTotalPrice } = useCartStore();
 return (
    <div className="checkout">
      <h2>CheckOut</h2>
      <h3>Total Price: ${Number(getTotalPrice())}</h3>
      <button className="checkout-btn">Place Order</button>
    </div>
  );
};

export default CheckOut;
