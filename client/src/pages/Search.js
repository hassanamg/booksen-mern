import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './books.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import { useMemo, useState, useEffect } from 'react';
import Modal from '../components/modal';
import BookViewer from '../components/Viewer';
import Pagination from '../components/pagination';
// import httpGetAllBooks from '../hooks/fetchData';
// import useBooks from '../hooks/fetchData';
import useBooks from '../hooks/useBooks';
import LoadingSpinner from '../components/LoadingSpinner';
 import useSearchedBooks from '../hooks/useSearchedBooks';
 import History from '../components/History';
 import { useLocation } from 'react-router-dom';
// import Error from '../components/
//import Search from "../components/Search"
import Viewer from '../components/Viewer';
const Search = () => {
   

    const search = useLocation().search
    const query = new URLSearchParams(search).get('q')
  
  
  const [modalOpen, setModalOpen] = useState(false)
  const [tempData, setTempData] = useState([])
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
   
//   var books = useBooks().data

     var fetchedBooks = useSearchedBooks(query)
   
   var allBooks = 0
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const prevPage = () => setCurrentPage(currentPage - 1)
  const nextPage = () => setCurrentPage(currentPage + 1)
    const [isLoaded, setIsLoaded] = useState(false)
  if(fetchedBooks){
   allBooks = fetchedBooks.length
  fetchedBooks = fetchedBooks.slice(indexOfFirstPost, indexOfLastPost)
  
  }

  const getSingleData = (imageCover,date, title, isbn, category, description, author, authorImg, preview) => {
  
    let tempData= [imageCover,date, title,isbn, category, description, author, authorImg, preview]
    setTempData(item => [1, ...tempData]) 
    
  }
      

    return <div className={styles.container__bg}>
         <div className={styles['innerContainer']}>
            <Row>
              <h1>You are searching about {`${query}`}</h1>
              

            {
                useEffect(() =>{

                  const timer = setTimeout( () => setIsLoaded(true) , 1000)
                  return () => clearTimeout(timer);


                })
               
              }
              {
                !isLoaded? <LoadingSpinner /> : <> </>
              }
              <Container>
               <DropdownButton variant='success' className={styles.dropdowns} id="dropdown-basic-button dropdowns" title="Dropdown button">
                <Dropdown.Item  href="#/action-1">A - Z alphabatically</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Z - A alphabatically</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Most reviewed</Dropdown.Item>
              </DropdownButton>
              </Container>
            </Row>
              
              
               <AnimatePresence
    
                initial={false}
              
                exitBeforeEnter={true}
                
                onExitComplete={() => null}
               >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} 

                   imageCover={tempData[1]} 
                    date={tempData[2]} 
                    title={tempData[3]} 
                    isbn={tempData[4]}  
                    category={tempData[5]}       
                    description={tempData[6]}
                    preview={tempData[8]}
               />
                }
                
               </AnimatePresence>
              

            <Row style={{ marginTop: '30px', textAlign:"center" }}>
             
            {
              
             
                 fetchedBooks?.map((book, i) => {
                 if(book.accessInfo.embeddable === true ) {
                   let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                   let title = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                   let preview = book.volumeInfo.previewLink
                   if(thumbnail != undefined && title != undefined && preview != undefined) {
                   return <Col md={3} key={i}>
                  
                      <figure>
                  
                    
                        <img src={thumbnail? thumbnail : ''} alt={`${book.volumeInfo.title}`} />
                        <figcaption className={styles['book__title']}>{book.volumeInfo.title}</figcaption>
                   
                        <figcaption className={styles['book__author']}>by<span>{book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.map((author, i) => i == 0? author : ` and ${author}`)  : book.volumeInfo.authors} </span></figcaption>
                        {/* <figcaption className={styles['payment__case']}>Free</figcaption> */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={styles['view__more-link']}
                          onClick={() => (modalOpen ? close() : open(), getSingleData(thumbnail,book.volumeInfo.publishedDate, book.volumeInfo.title, book.volumeInfo.industryIdentifiers.map((industry) => industry.type.includes("ISBN") ? industry.identifier : ""), book.volumeInfo.categories, book.volumeInfo.description, book.volumeInfo.authors, preview) )}
                        > 
                              View more
                        </motion.button>
                    </figure>
                </Col>
                
              }
                   }
           })
         
          }
            
            </Row>
           <Pagination 
           postsPerPage={postsPerPage} 
           totalPosts={allBooks} 
           paginate={paginate} 
           prevPage={prevPage} 
           nextPage={nextPage}
           isFirst={currentPage === 1 ? false : true}
           isLast={currentPage === Math.ceil(allBooks / postsPerPage) ? false : true}
           />
         </div>
        
      </div>
     
      
   
  return console.log(tempData)
   
}
export default Search


