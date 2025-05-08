import React from 'react';
import { useNavigate } from 'react-router-dom';

function InfoButton({item}){
    const navigate = useNavigate();

    const navItemPage = () => {
        navigate("/item", {state: {item}});
    }

    return(
        <td>
            <button type="button" onClick={navItemPage}>
                Info
            </button>
        </td>
    );
}

export default InfoButton;