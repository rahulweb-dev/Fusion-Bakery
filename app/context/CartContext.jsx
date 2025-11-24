"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add To Cart (save slug + qty)
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.slug === product.slug);
      if (exist) {
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  // ❌ Remove from Cart
  const removeFromCart = (slug) => {
    setCart((prev) => prev.filter((item) => item.slug !== slug));
  };

  // ➕ Increase Qty
  const increaseQty = (slug) => {
    setCart((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Decrease Qty
  const decreaseQty = (slug) => {
    setCart((prev) =>
      prev.map((item) =>
        item.slug === slug && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
