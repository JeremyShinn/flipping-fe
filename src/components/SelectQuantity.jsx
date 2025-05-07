import { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

function SelectQuantity(){
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity -1);
        }
    }

    return(
        <td>
            <FaMinus onClick={decreaseQuantity}/>
            <> {quantity} </>
            <FaPlus onClick={increaseQuantity}/>
        </td>
    );
}

export default SelectQuantity;