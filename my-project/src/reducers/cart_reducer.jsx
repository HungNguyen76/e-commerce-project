import {
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  // CLEAR_CART,
  // COUNT_CART_TOTALS,
  // REMOVE_CART_ITEM,
  // TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if(tempItem) {
        const tempCart = state.cart.map(cartItem => {
            if(cartItem.id === id) {
                let newAmount = cartItem.amount + amount
                return { ...cartItem, amount: newAmount}
            } else {
                return cartItem
            }
        })
        return { ...state, cart: tempCart };
    }
     else {
        const newItem = {
          id,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return {...state, cart: [...state.cart, newItem]}
    }
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
