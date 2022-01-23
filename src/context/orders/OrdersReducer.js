import { SET_ORDERS_LIST, SET_ADD_PRODUCT } from "context/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_ORDERS_LIST:
      return {
        ...state,
        orders_list: payload,
        loading_orders_list: false
      };
    case SET_ADD_PRODUCT:
      return {
        ...state,
        orders_list: [
          ...state.orders_list
            .map(order => order.number === payload.number ? 
              {order, items: [...order.items, payload.item] } : order)
        ]
      }
    default:
      return state;
  }
};