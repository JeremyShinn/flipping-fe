import React from 'react';

function ItemPage(){
    //const { item } = this.props.location;
    
    return(
        <>
            <h2>Item Details</h2>
            <table>
                <thead>
                    <td></td>
                    <td></td>
                </thead>
                <tbody>
                <tr>
                        <td>Name</td>
                        <td>Steam Deck Oled 512GB</td>
                    </tr>
                    <tr>
                        <td>Purchase Date</td>
                        <td>3/22/2024</td>
                    </tr>
                    <tr>
                        <td>Price Paid</td>
                        <td>$350</td>
                    </tr>
                    <tr>
                        <td>List Price</td>
                        <td>$550</td>
                    </tr>
                    <tr>
                        <td>Total Expense</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Total Revenue</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Profit</td>
                        <td>$0</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ItemPage;