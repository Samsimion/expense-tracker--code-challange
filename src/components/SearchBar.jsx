import React from "react";

function SearchBar({ searchQuery, onSearchChange }){
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search expenses..." value={searchQuery} onChange={(e)=>onSearchChange(e.target.value)} />
        </div>
    );
}export default SearchBar