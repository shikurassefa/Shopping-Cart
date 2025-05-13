import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
   
      handleAddToCart: (name, id, price) => {
        // handleAddToCart is a function that takes name,id and price as arguments
        set((state) => {
          const itemExists = state.cart.find((item) => {
            return item.id === id;
          });
          if (itemExists) {
            return {
              cart: state.cart.map((item) => {
                if (item.id === id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              }),
            };
          } else {
            return {
              cart: [...state.cart, { name, id, price, quantity: 1 }],
            };
          }
        });
      },
      handleRemoveFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      },
      getTotalQuantity: () => {
        return get().cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
