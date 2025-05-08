import React from 'react';

function FinancePage(){
    return(
        <>
            <h2>Financial Summary</h2>
            <table>
                <thead>
                    <td></td>
                    <td></td>
                </thead>
                <tbody>
                <tr>
                        <td>Period: </td>
                        <td>Previous Month</td>
                    </tr>
                    <tr>
                        <td>Dates: </td>
                        <td>4/01/25-4/30/25</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Sales: </td>
                        <td>$1443.29</td>
                    </tr>
                    <tr>
                        <td>COGS: </td>
                        <td>$872.93</td>
                    </tr>
                    <tr>
                        <td>Expenses: </td>
                        <td>$276.80</td>
                    </tr>
                    <tr>
                        <td>Net Profit: </td>
                        <td>$293.56</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default FinancePage;