import { createContext, useState } from 'react';
import dataProducts from './../../data/dataProducts.json';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState(dataProducts);

  const [cart, setCart] = useState([]);

  const handleAddCart = ({ product }) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const copyCart = [...cart];
      copyCart.push({ ...product, quantity: 1, finalPrice: product.price });
      setCart(copyCart);
    } else {
      const copyCart = [...cart];
      copyCart[index] = {
        ...copyCart[index],
        quantity: copyCart[index].quantity + 1,
        finalPrice: (copyCart[index].quantity + 1) * copyCart[index].price,
      };
      setCart(copyCart);
    }
  };

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart,
    handleAddCart,
  };
  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
