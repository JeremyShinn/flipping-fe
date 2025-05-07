import React from 'react';
import SelectQuantity from './SelectQuantity';

function OrderRow({ item, key }){
    return(
        <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <SelectQuantity />
        </tr>
    );
}

export default OrderRow;