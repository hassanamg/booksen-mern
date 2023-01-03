import { useEffect, useState } from "react"
import { SendQuery } from "../components/Search"
const API_URL = "http://localhost:4000"

async function httpGetBooks() {
    
    const response = await fetch(`${API_URL}/books`)
    console.log(response.doc)
    return await response.json()
    
}
// const  GetInputValue = () => {

// const [value, setValue] = useState('')
//     setValue('Java')
//     return value
    
   
// }
async function httpGetSearchedBooks(query) {
    
    const response = await fetch(`${API_URL}/books?q=${query}`)
    console.log(response.data)
    return await response.json()
    
}
export {
    httpGetBooks,
    httpGetSearchedBooks
}