import { useReducer, useEffect, useCallback } from 'react'
import { HTTP } from 'utils/http_common'
import OrdersReducer from 'context/orders/OrdersReducer';
import OrdersContext from 'context/orders/OrdersContext'
import { SET_ORDERS_LOADING_LIST, SET_ORDERS_LIST, SET_ADD_PRODUCT } from 'context/types'

const OrdersState = (props) => {
    const initState = {
        orders_list:[],
        loading_orders_list:[]
    }

    const [state, dispatch] = useReducer(OrdersReducer, initState);
    
    const getOrders = useCallback(async () => {
        dispatch({
            type:SET_ORDERS_LOADING_LIST,
            payload:false
        })

        const res = await HTTP.get('orders')
        
        dispatch({
            type:SET_ORDERS_LIST,
            payload:res.data.orders
        })
    },[])

    const addProduct = (product) => {
        dispatch({
            type:SET_ADD_PRODUCT,
            payload:product
        })
    }

    useEffect(() => {
      getOrders();
    }, [getOrders]);
    

    return (
        <OrdersContext.Provider
        value={{
            orders_list:state.orders_list,
            loading_orders_list:state.loading_orders_list,
            getOrders,
            addProduct
        }}>
            {props.children}
        </OrdersContext.Provider>
    )
}

export default OrdersState;