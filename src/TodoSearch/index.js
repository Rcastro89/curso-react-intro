import React, { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContex';

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);

    return(
        <input placeholder="Cortar cebolla" className="TodoSearch"
        value={searchValue}
        onChange={(e) => {
            setSearchValue(e.target.value)
        }}/>
    );
}

export { TodoSearch }