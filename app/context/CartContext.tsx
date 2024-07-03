import { createContext, useState } from "react";

export interface CartProviderContextType {
  addToCart: (line: CartEntry) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartEntry[];
}
export interface CartEntry {
  id: number;
  quantity: number;
}
const defaultState = {
  addToCart: (line: CartEntry) => {},
  removeFromCart: (id: number) => {},
  cartItems: [],
} as CartProviderContextType;
export const CartContext = createContext(defaultState);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);

  const addToCart = (line: CartEntry) => {
    //console.log(cartItems);
    const isItemInCart = cartItems.find(
      (cartItem: CartEntry) => cartItem.id === line.id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem: CartEntry) =>
          cartItem.id === line.id
            ? { ...cartItem, quantity: line.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { id: line.id, quantity: line.quantity }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((cartItem: CartEntry) => cartItem.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
