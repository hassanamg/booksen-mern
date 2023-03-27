import { useEffect, useState } from "react"
import { SendQuery } from "../components/Search"
const API_KEY="AIzaSyB5HRMypmZbbt2uQzKelU3jinlaeOvR4So"
// const API_URL = "http://localhost:4000"
const API_URL = "https://www.googleapis.com/books/v1/volumes"
// async function httpGetBooks() {
    
<<<<<<< HEAD
    const response = await fetch(`${API_URL}/books`)
    console.log(response.doc)
     console.log(response.status)
    return await response.json()
=======
//     const response = await fetch(`${API_URL}/books`)
//     console.log(response.doc)
//      console.log(response.status)
//     return await response.json()
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
    
// }
// const  GetInputValue = () => {

// const [value, setValue] = useState('')
//     setValue('Java')
//     return value
    
   
// }
async function httpGetSearchedBooks(query) {
    try {
    const response = await fetch(`${API_URL}?q=${query}&startIndex=0&maxResults=40&key=${API_KEY}`)
    return await response.json()
    } catch(err) {

        console.log(err)
    }
}
export {
    httpGetSearchedBooks
}