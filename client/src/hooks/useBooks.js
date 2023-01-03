import { fabClasses } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import {httpGetBooks} from "./requests"


function useBooks() {

    const [books, saveBooks] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
    const getBooks = useCallback(async() => {
    
    const fetchedBooks = await httpGetBooks()
    
        if(fetchedBooks)  setIsLoaded(true)
        console.log(isLoaded)
        saveBooks(fetchedBooks)
        
    },[])
    useEffect(() => {
      getBooks();
    
    },[]);
  return books
 
}

export default useBooks