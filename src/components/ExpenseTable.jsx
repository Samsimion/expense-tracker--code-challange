import React from "react";
import styles from "./ExpenseTable.module.css"

function ExpenseTable({ expenses, onDelete }){
    return (
        <>
        <div className="{styles.wrapper}">
            <h2>Expense List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map( (expense)=>{

                        return(
                            <tr key ={expense.id} >
                                <td>{expense.description}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount.toFixed(2)}</td>
                                <td>{expense.time}</td>
                                <td>{expense.date}</td>
                                <td> <button onClick={()=> onDelete(expense.id)}>🗑️ Delete </button> </td>
                            </tr>
                        )
                    }
                 )}
                </tbody>
            </table>
        </div>
        </>
    )
} export default ExpenseTable