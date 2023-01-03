import styles from './Search.module.css'
import searchIcon from '../assets/icons/search_icon.svg'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  {httpGetSearchedBooks}  from '../hooks/requests'
import {useSearchedBooks} from '../hooks/useSearchedBooks'
import History from './History'
import LoadingSpinner from './LoadingSpinner'
const Search = (props) => {

   
    
    const navigate = useNavigate()


    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const submitAction = async(e) => {
      
      e.preventDefault()
       setInput(input)
       const fetchedBooks = await httpGetSearchedBooks(input)
       setData(fetchedBooks)
       
       
       window.setTimeout(() => {
          navigate(`/search?q=${input}`)
       }, 1500)
       
    }
    console.log(data)
    return (
   
           <div className={styles['search__input']}>
                <input id='searchInput' value={input}  onChange={(e) => setInput(e.target.value)} placeholder="Search by book name, author or ISBN ... " />
                <a className={styles['search__btn']} onClick={submitAction} >
                <img className={styles['searchIcon']} src={searchIcon} alt="search" />
                </a>
            </div>    
          
    )

}
  
export default  Search