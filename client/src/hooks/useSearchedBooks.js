import  {httpGetSearchedBooks}  from "./requests";
import { useCallback, useEffect, useState } from 'react'

function useSearchedBooks(query) {


    const [books, saveBooks] = useState([])
    
    const getBooks = useCallback(async() => {
    
    const fetchedBooks = await httpGetSearchedBooks(query)
    
        saveBooks(fetchedBooks.items)
        // fetchedBooks.items.map((info)=> {
        //   console.log(info.accessInfo)
        // })

    },[])
    useEffect(() => {
      getBooks();
    
    },[]);
  return books
 
}

export default useSearchedBooks