import React from 'react';
import InventoryRow from './InventoryRow';

function InventoryTable({inventory}){
    return(
        <table>
            <thead>
                <td>Item Name</td>
                <td>Total Cost</td>
                <td>List Price</td>
                <td>List Date</td>
                <td></td>
                <td></td>
            </thead>
            <tbody>
                {inventory.map((item, i) => <InventoryRow item={item} key={i} />)}
            </tbody>
        </table>
    );
}

export default InventoryTable;