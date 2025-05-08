import React from 'react';
import InventoryTable from '../components/InventoryTable';

function InventoryPage({inventory}){
    return(
        <>
            <h2>Inventory</h2>
            <InventoryTable inventory={inventory}/>
        </>
    )
}

export default InventoryPage;