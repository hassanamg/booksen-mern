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

const Search = () => {
   
    const search = useLocation().search
    const query = new URLSearchParams(search).get('q')
   console.log(query)
   var fetchedBooks = useSearchedBooks(query).data
   console.log(fetchedBooks)
  
    const [modalOpen, setModalOpen] = useState(false)
  const [tempData, setTempData] = useState([])
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
   
//   var books = useBooks().data


   var allBooks = 0
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const prevPage = () => setCurrentPage(currentPage - 1)
  const nextPage = () => setCurrentPage(currentPage + 1)
    const [isLoaded, setIsLoaded] = useState(false)

  if(fetchedBooks){
   allBooks = fetchedBooks.length
   console.log(allBooks)
  fetchedBooks = fetchedBooks.slice(indexOfFirstPost, indexOfLastPost)
  
  }
  
  const getSingleData = (imageCover,date, title, isbn, category, description, author, authorImg) => {
  
    let tempData= [imageCover,date, title,isbn, category, description, author, authorImg]
    console.warn(tempData)
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
                    authorImg={tempData[8]}
               />
                }
               </AnimatePresence>
              

            <Row style={{height: "50em", marginTop: '30px' }}>
             
            {
              
             
                 fetchedBooks?.map((book, i) => {

                   
              return <Col md={3} key={i}>
                  
                  <figure>
              
                  
                    <img src={`./../images/${book.imageCover}`} alt={`${book.slug}`} />
                    <figcaption className={styles['book__title']}>{book.title}</figcaption>
                    <figcaption className={styles['book__author']}>by<span>{book.authors[0].authorName}</span></figcaption>
                    <figcaption className={styles['payment__case']}>Free</figcaption>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={styles['view__more-link']}
                      onClick={() => (modalOpen ? close() : open(), getSingleData(book.imageCover,book.publishedDate, book.title, book.isbn, book.categories, book.longDescription, book.authors[0].authorName, book.authors[0].authorImg) )}
                    > 
                          View more
                    </motion.button>
                  
                  
                </figure>
                
                </Col>
                
              
              
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
           isLast={currentPage ===Math.ceil(fetchedBooks / postsPerPage)  ? false : true}
           />
         </div>
        
      </div>
     
      
   
  
   
}
export default Search


