
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './books.module.css'
// import {motion, AnimatePresence} from 'framer-motion'
// import { useEffect, useMemo, useState } from 'react';
// import Modal from '../components/modal';
// import Pagination from '../components/pagination';
// import LoadingSpinner from '../components/LoadingSpinner';
// import useBooks from '../hooks/useBooks';
// const Books = (props, {children, handleClose }) => {


   
//   const [modalOpen, setModalOpen] = useState(false)
//   const [tempData, setTempData] = useState([])
  
<<<<<<< HEAD
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
=======
//   const [currentPage, setCurrentPage] = useState(1)
//   const [postsPerPage, setPostsPerPage] = useState(12)
//   const close = () => setModalOpen(false)
//   const open = () => setModalOpen(true)
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
   
//   var books = useBooks().data

   
//    var allBooks = 0
//    const indexOfLastPost = currentPage * postsPerPage
//    const indexOfFirstPost = indexOfLastPost - postsPerPage

//   const paginate = pageNumber => setCurrentPage(pageNumber)
//   const prevPage = () => setCurrentPage(currentPage - 1)
//   const nextPage = () => setCurrentPage(currentPage + 1)
  
//   if(books){
//    allBooks = books.length
//    console.log(allBooks)
//   books = books.slice(indexOfFirstPost, indexOfLastPost)
  
//   }
  
//   const [isLoaded, setIsLoaded] = useState(false)
//   const getSingleData = (imageCover,date, title, isbn, category, description, author, authorImg) => {
  
//     let tempData= [imageCover,date, title,isbn, category, description, author, authorImg]
//     console.warn(tempData)
//     setTempData(item => [1, ...tempData]) 
    
//   }
//     return <div className={styles.container__bg}>
//          <div className={styles['innerContainer']}>
//             <Row>
//               <h1>All Available books</h1>
              
//               {
//                 useEffect(() =>{

//                   const timer = setTimeout( () => setIsLoaded(true) , 1000)
//                   return () => clearTimeout(timer);


//                 })
               
<<<<<<< HEAD
              }
              {
                //!isLoaded? <LoadingSpinner /> : <> </>
                
                 !books? <LoadingSpinner /> : ''
                }
=======
//               }
//               {
//                 //!isLoaded? <LoadingSpinner /> : <> </>
                
//                  !books? <LoadingSpinner /> : ''
//                 }
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
             
//               {/* 

//               <Container>
//                <DropdownButton variant='success' className={styles.dropdowns} id="dropdown-basic-button dropdowns" title="Dropdown button">
//                 <Dropdown.Item  href="#/action-1">A - Z alphabatically</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Z - A alphabatically</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Most reviewed</Dropdown.Item>
//               </DropdownButton>
//               </Container> */}
//             </Row>
               
          


 
             
//                <AnimatePresence
    
//                 initial={false}
              
//                 exitBeforeEnter={true}
                
//                 onExitComplete={() => null}
//                >
//                 {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} 

//                    imageCover={tempData[1]} 
//                     date={tempData[2]} 
//                     title={tempData[3]} 
//                     isbn={tempData[4]}  
//                     category={tempData[5]}       
//                     description={tempData[6]}
//                     authorImg={tempData[8]}
//                />
//                 }
//                </AnimatePresence>
              

<<<<<<< HEAD
            <Row>
=======
//             <Row>
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
             
//             {
              
    
//                  books?.map((book, i) => {

                   
<<<<<<< HEAD
                   return <Col md={3} xs={6} key={i}>
=======
//                    return <Col md={3} xs={6} key={i}>
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
                  
//                   <figure>
              
                  
<<<<<<< HEAD
                    <img src={`./../images/${book.imageCover}`} alt={`${book.slug}`} />
                    <figcaption className={styles['book__title']}>{book.title}</figcaption>
                    <figcaption className={styles['book__author']}>by<span>{book.authors.map(author => author.authorName)}</span></figcaption>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={styles['view__more-link']}
                      onClick={() => (modalOpen ? close() : open(), getSingleData(book.imageCover,book.publishedDate, book.title, book.isbn, book.categories, book.longDescription, book.authors[0].authorName, book.authors[0].authorImg) )}
                    > 
                          View more
                    </motion.button>
=======
//                     <img src={`./../images/${book.imageCover}`} alt={`${book.slug}`} />
//                     <figcaption className={styles['book__title']}>{book.title}</figcaption>
//                     <figcaption className={styles['book__author']}>by<span>{book.authors.map(author => author.authorName)}</span></figcaption>
                    
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className={styles['view__more-link']}
//                       onClick={() => (modalOpen ? close() : open(), getSingleData(book.imageCover,book.publishedDate, book.title, book.isbn, book.categories, book.longDescription, book.authors[0].authorName, book.authors[0].authorImg) )}
//                     > 
//                           View more
//                     </motion.button>
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
                  
                  
//                 </figure>
                
//                 </Col>
                
              
              
//            })
         
//           }
    
//            </Row>
//            <Pagination 
//            postsPerPage={postsPerPage} 
//            totalPosts={allBooks} 
//            paginate={paginate} 
//            prevPage={prevPage} 
//            nextPage={nextPage}
//            isFirst={currentPage === 1 ? false : true}
//            isLast={currentPage === Math.ceil(allBooks / postsPerPage) - 1  ? true : false}
           
//            />
//            {console.log(Math.ceil(allBooks / postsPerPage))}
//          </div>
        
//       </div>
     
      
   
//   }
  




// export default Books




