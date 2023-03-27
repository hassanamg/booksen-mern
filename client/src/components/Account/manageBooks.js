<<<<<<< HEAD
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import useBooks from '../../hooks/useBooks';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import AddBook from '../AddBook';
const ManageBooks = () => {

  
  const books =  useBooks().data
  const [isChecked, setIsChecked] = useState([""])
  const [showAddBook, setShowAddBook] = useState(false)
   const close = () => setShowAddBook(false)
  const open = () => setShowAddBook(true)
  function handleDelete() {

    console.log(isChecked) 
    setIsChecked("")
  }
  return (
  <div>
    <div  className='table--actions'>
      <Button onClick={open} style={{position: "absolute", top: "2%", left: "26%"}} variant="outline-primary">Add a new book</Button>
    </div>
   {showAddBook && <AddBook showAddBook={showAddBook} handleClose={close}/> }
    <Table style={{width: '40%',fontSize:"0.8em", height: "60%", margin: "4.6em auto"}} striped bordered hover variant="light">
      
      <thead>
        <tr>
          <th>#</th>
          <th>Book title</th>
          <th>Authors</th>
          <th>Categories</th>
          <th>Language</th>
          <th>Status</th>
          <th>Published Date</th>
        </tr>
      </thead>
      <tbody>
        {
          books?.map((book, i) => {

            return( <tr>
                    
                    <td>
                    <Form.Check
                      inline
                      name="group1"
                      type='checkbox'
                      id={book.id}
                      onChange={(e) => setIsChecked(e.target.id)}
                      key={"book"}
                      label={i}
                    />
                    </td>
                  
                     <td>{book.title}</td>
                    <td>{book.authors[0].authorName}</td>
                    <td>{book.categories}</td>
                    <td>{book.language}</td>
                    <td>{book.status}</td>
                    <td>{book.publishedDate}</td>
                     <td>
                      <Button variant="outline-warning">Update</Button>{' '}
                     </td>
                     <td>
                      <Button onClick={handleDelete} variant="outline-danger">Delete</Button>{' '}
                     </td>
                     <td>
                      <Button variant="outline-info">Info</Button>{' '}
                     </td>
                  </tr>
            )


          })
       
       }
      </tbody>
    </Table>
  </div>
  );
}

export default ManageBooks;
=======
// import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form'
// import useBooks from '../../hooks/useBooks';
// import Button from 'react-bootstrap/Button'
// import { useState } from 'react';
// import AddBook from '../AddBook';
// const ManageBooks = () => {

  
//   const books =  useBooks().data
//   const [isChecked, setIsChecked] = useState([""])
//   const [showAddBook, setShowAddBook] = useState(false)
//    const close = () => setShowAddBook(false)
//   const open = () => setShowAddBook(true)
//   function handleDelete() {

//     console.log(isChecked) 
//     setIsChecked("")
//   }
//   return (
//   <div>
//     <div  className='table--actions'>
//       <Button onClick={open} style={{position: "absolute", top: "2%", left: "26%"}} variant="outline-primary">Add a new book</Button>
//     </div>
//    {showAddBook && <AddBook showAddBook={showAddBook} handleClose={close}/> }
//     <Table style={{width: '40%',fontSize:"0.8em", height: "60%", margin: "4.6em auto"}} striped bordered hover variant="light">
      
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Book title</th>
//           <th>Authors</th>
//           <th>Categories</th>
//           <th>Language</th>
//           <th>Status</th>
//           <th>Published Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           books?.map((book, i) => {

//             return( <tr>
                    
//                     <td>
//                     <Form.Check
//                       inline
//                       name="group1"
//                       type='checkbox'
//                       id={book.id}
//                       onChange={(e) => setIsChecked(e.target.id)}
//                       key={"book"}
//                       label={i}
//                     />
//                     </td>
                  
//                      <td>{book.title}</td>
//                     <td>{book.authors[0].authorName}</td>
//                     <td>{book.categories}</td>
//                     <td>{book.language}</td>
//                     <td>{book.status}</td>
//                     <td>{book.publishedDate}</td>
//                      <td>
//                       <Button variant="outline-warning">Update</Button>{' '}
//                      </td>
//                      <td>
//                       <Button onClick={handleDelete} variant="outline-danger">Delete</Button>{' '}
//                      </td>
//                      <td>
//                       <Button variant="outline-info">Info</Button>{' '}
//                      </td>
//                   </tr>
//             )


//           })
       
//        }
//       </tbody>
//     </Table>
//   </div>
//   );
// }

// export default ManageBooks;
>>>>>>> bca72845e328536961ba89f5166cfdd6abf5603f
