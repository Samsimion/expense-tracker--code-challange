import React from "react";
import styles from "./ExpenseTable.module.css"

function ExpenseTable({ expenses, onDelete }){
    return (
        <>
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Expense List</h2>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Description</th>
                        <th className={styles.th}>Category</th>
                        <th className={styles.th}>Amount</th>
                        <th className={styles.th}>Time</th>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map( (expense)=>{

                        return(
                            <tr className={`${styles.tr} ${styles.stripedRow}`} key ={expense.id} >
                                <td className={styles.td}>{expense.description}</td>
                                <td className={styles.td}>{expense.category}</td>
                                <td className={styles.td}>{`Ksh.${expense.amount.toFixed(2)}`}</td>
                                <td className={styles.td}>{expense.time}</td>
                                <td className={styles.td}>{expense.date}</td>
                                <td className={styles.td}> <button className={styles.deleteButton} onClick={()=> onDelete(expense.id)}>🗑️ Delete </button> </td>
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