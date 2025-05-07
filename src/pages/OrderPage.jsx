import React from 'react';
import OrderTable from '../components/OrderTable';

function OrderPage({items}){
    return(
        <>
            <h2>Place your order!</h2>
            <p>Click the - and + to select a quantity from 0 to 10 for each item.</p>
            <OrderTable items={items}/>
        </>
    )
}

export default OrderPage;