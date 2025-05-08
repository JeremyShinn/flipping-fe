import React from 'react';
import { Link } from 'react-router-dom';
import InfoButton from './InfoButton';
import SoldButton from './SoldButton';

function InventoryRow({ item, key }){
    return(
        <tr>
            <td><Link to={{ pathname: "/item",  state: {item} }}>{item.name}</Link></td>
            <td>${item.cost}</td>
            <td>${item.price}</td>
            <td>{item.date}</td>
            <InfoButton />
            <SoldButton />
        </tr>
    );
}

export default InventoryRow;