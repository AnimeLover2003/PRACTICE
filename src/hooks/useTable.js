import { useState, useEffect } from 'react'
import { Data } from '../services/index';

export const useTable = () => {

  const [ data, setData ] = useState([])
  const [ dataModify, setDataModify ] = useState([])
  
  useEffect(() => {
    setData(Data)
    setDataModify(Data)
  }, [])

  
  const SearchWord = (value) => {
    const searchTermLower = value.toString().toLowerCase();


    if (value === '') {
      setDataModify(data);
    } else {
      const filteredData = data.filter((data) => {
        return Object.keys(data).filter(key => key.toLowerCase() !== 'id').some((key) => 
          data[key].toString().toLowerCase().includes(searchTermLower)
        );
      });

  
    // if (value === '') {
    //   setDataModify(data);
    // } else {
  
    //   const filteredData = data.filter((data) => {
    //     return Object.values(data).some((value) =>
    //       value.toString().toLowerCase().includes(searchTermLower)
    //     );
  
    //   });
  
      setDataModify(filteredData);
    }
  }

  return (
    {
        dataModify,
        SearchWord,
        setData,
        setDataModify
    }
  )
}


