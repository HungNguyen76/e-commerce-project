import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOOGLE_CART_ITEM_AMOUNT,
} from '../actions';
import { products_url } from '../utils/constants';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { Id, idColor, ColorsArr, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === Id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === Id) {
          let newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        Id,
        idColor,
        name: product.Title,
        subtitle: product.SubTitle,
        ColorsArr,
        amount,
        image: product.Image,
        price: product.Price,
        max: product.Stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.idColor !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === TOOGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
