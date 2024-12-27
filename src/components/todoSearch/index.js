import React from "react";
import styles from './styles.module.css';

function TodoSearch({searchValue, setSearchValue}){

    // const [ searchValue, setSearchValue ] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return [
        <div className={ styles.inputContainer }>
            <input 
            className={ styles.searchInput } 
            placeholder="Buscar"
            value={ searchValue }
            onChange={ onSearchValueChange }
            />
        </div>,
        // <p>{searchValue}</p>
        
    ];
}

export { TodoSearch };