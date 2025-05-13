import { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import { useCartStore } from "../stores/cartStore";
import { productStore } from "../stores/productStore";
const ProductListing = () => {
  const { handleAddToCart } = useCartStore();

  const { products, loading, error, fetchedProducts } = productStore();
  useEffect(() => {
    fetchedProducts();
  }, []);

  if (loading) {
    return (
      <div className="progress">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="single-product" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="image-product"
            />
            <div className="footer">
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">${product.price}</p>
            </div>
            <div className="btn-container">
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  handleAddToCart(product.title, product.id, product.price)
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
