import { useState } from "react";
import styles from './ExpenseForm.module.css';

function ExpenseForm({ onAddExpense }){
    const [formData, setFormData]= useState({
        description: "",
        category: "",
        amount: "",
        time :"",
        date:""
    });
    function handleChange(e){
        const { name, value } =e.target;
        setFormData((prevFormData)=> {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        const newExpense = {
            id:crypto.randomUUID(),
            ...formData,
            amount: parseFloat(formData.amount),
        };

        onAddExpense(newExpense);

        setFormData({
            description: "",
            category: "",
            amount: "",
            time :"",
            date:""
        })
    }



    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Add New Expense</h2>

            <input type="text" name="description" placeholder="describe the expense" value={formData.description} onChange={handleChange} className={styles.input} required/>
            <input type="text" name="category" placeholder="Enter the category" value={formData.category} onChange={handleChange} className={styles.input} required/>
            <input type="number" name="amount" placeholder="Enter the Amount" value={formData.amount} onChange={handleChange} className={styles.input} required/>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className={styles.input} required/>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className={styles.input} required/>
            <button type="submit" className={styles.button}>Add Expense</button>
        </form>
    )
}export default ExpenseForm