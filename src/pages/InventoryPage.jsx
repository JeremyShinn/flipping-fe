import React from 'react';
import InventoryTable from '../components/InventoryTable';

function InventoryPage({inventory}){
    return(
        <>
            
            <div>Click the Finances link for a convenient way to see your</div>
            <div>important financial information with one click!</div>
            <h2>Inventory</h2>
            <div>When you sell an item:</div>
            <div>1. Click the sold button to the right of the item</div>
            <div>2. Click ok to confirm</div>
            <p></p>
            <InventoryTable inventory={inventory}/>

        </>
    )
}

export default InventoryPage;