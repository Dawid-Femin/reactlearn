import style from './SearchBar.module.scss'
import {useState} from 'react';

function SearchBar(props) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className={style.searchBar}>
            <input value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
                   className={style.searchBar__input} type='text'/>
            <button onClick={props.onSearch(inputValue)}>Szukaj</button>
        </div>
    )
}

export default SearchBar