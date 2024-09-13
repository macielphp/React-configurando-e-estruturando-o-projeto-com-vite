import { useState } from 'react';
import './style.css';

export default function SearchBar(){
    const [termSearched, setTermSearched] = useState('');
    console.log(termSearched);
    return(
        <input 
        type="search" 
        placeholder="Type what you wish" 
        className="search-bar"
        value={termSearched}
        onChange={(event) => setTermSearched(event.target.value)}/>
    )
}