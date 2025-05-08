import React from 'react';
import { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

function SoldButton({item}){

    const sellItem = () => {
        alert("Have you sold this item?\n\nMarking it as sold will remove it from the inventory list.");
    }

    return(
        <td>
            <button type="Sold" onClick={sellItem}>
                Sold
            </button>
        </td>
    );
}

export default SoldButton;