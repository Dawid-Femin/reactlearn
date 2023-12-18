import style from './SearchBar.module.scss';
import {useState} from 'react';
import {SearchFunction} from "../../interfaces/HeaderData.tsx";

interface SearchBarProps {
    searchHotels: SearchFunction;
}

function SearchBar(props: SearchBarProps) {

    const [inputValue, setInputValue] = useState('');

    const removeInputValueHandler = () => {
        if (inputValue.trim() !== '') {
            props.searchHotels(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className={style.searchBar}>
            <input value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
                   className={style.searchBar__input} type='text'
                   onClick={removeInputValueHandler}
            />
            <button onClick={() => props.searchHotels(inputValue)}>Szukaj</button>
        </div>
    )
}

export default SearchBar;