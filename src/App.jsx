import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import useLocalStorage from './components/UseLocalStorage';
import './App.css';

function App(){
  const [expenses, setExpenses]= useLocalStorage("expenses", [])
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleAddExpense(newExpense){
    setExpenses((prevExpenses)=> [newExpense, ...prevExpenses])
  }

  function handleDeleteExpense(id){
    setExpenses((prevExpenses)=>
      prevExpenses.filter((expense)=> expense.id !== id)
    );
  }

  const filteredExpenses = expenses.filter((expense)=>{

    const matchesSearch = `${expense.description} ${expense.category} ${expense.date}`
    .toLowerCase()
    .includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || expense.category ===selectedCategory;
    return matchesSearch && matchesCategory;
  } 
   
  );



  return (
    <div className="App">
      <h1 className="center">Expense Tracker</h1>
  
      
      <div className="main-content">
        <div className="left-section card">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
  
        <div className="right-section">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <div className="filter-container card">
            <label>Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              {[...new Set(expenses.map((e) => e.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <ExpenseTable
            expenses={filteredExpenses}
            onDelete={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  );
  
} export default App;