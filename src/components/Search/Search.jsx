import React, { useState } from 'react';
import "./Search.css"

export function Search({onChange}) {
    const [searchWord, setSearchWord] = useState('')

    const handleInputChange = (event) => {
        setSearchWord(event.target.value)
        onChange(event.target.value)
    }


  return (
    <div className="search">
        <input placeholder="Search..." type="text" onChange={handleInputChange} 
        value={searchWord}/>
    </div>
  );
}
