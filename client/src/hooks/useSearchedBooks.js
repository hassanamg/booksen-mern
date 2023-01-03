import  {httpGetSearchedBooks}  from "./requests";
import { useCallback, useEffect, useState } from 'react'

function useSearchedBooks(query) {


    const [books, saveBooks] = useState([])
    
    const getBooks = useCallback(async() => {
    
    const fetchedBooks = await httpGetSearchedBooks(query)
    
        saveBooks(fetchedBooks)

    },[])
    useEffect(() => {
      getBooks();
    
    },[]);
  return books
 
}

export default useSearchedBooks