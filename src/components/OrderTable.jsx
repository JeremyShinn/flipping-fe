import React from 'react';
import OrderRow from './OrderRow';

function OrderTable({items}){
    return(
        <table>
            <thead>
                <td>Item</td>
                <td>Price</td>
                <td>Quantity</td>
            </thead>
            <tbody>
                {items.map((item, i) => <OrderRow item={item} key={i} />)}
            </tbody>
        </table>
    );
}

export default OrderTable;