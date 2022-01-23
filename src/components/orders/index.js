import React from 'react';
import OrdersState from 'context/orders/OrdersState';
import OrdersList from 'components/orders/OrdersList';

const Orders = () => {

    return (
        <OrdersState>
            <h2 className="subtitle">Orders</h2>
            <OrdersList/>
        </OrdersState>
    );
};

export default Orders;
