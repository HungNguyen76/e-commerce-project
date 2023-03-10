import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOOGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return []
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
};


const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (Id, idColor, ColorsArr, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { Id, idColor, ColorsArr, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  }

  const toggleAmount = (id, value) => {
    dispatch({ type: TOOGLE_CART_ITEM_AMOUNT, payload: {id, value }});
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
    return useContext(CartContext)
}
