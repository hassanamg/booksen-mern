import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import styles from './AddBook.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const AddBook = (props) => {

  const [title, setTitle] = useState("")
   const [language, setLanguage] = useState("")
  const handleSubmit = () => {

    console.log(title, language)
  }
  const isValideInvalide = (input) => {

      if(!input) {

        return "inValide"
      }
      else if(input) {
        return "isValide"
      }

  }
  return (

         <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
                     
        <div className={styles['overlay']} onClick={props.handleClose}></div>
            <div className={styles.formPopup} id="popup">
            <Container id='blur'>
                <button onClick={props.handleClose}  className={styles['close__popup']}>X</button>
                  <div style={{padding: "1em"}}>
                    <Form>
                        <Row>
                         <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">Book title</Form.Label>
                             <Form.Control as="input" type="text" placeholder="Book title" value={title} onChange={(e)=> setTitle(e.target.value)} required></Form.Control>
                             <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                           </Col>
                           <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">Language</Form.Label>
                             <Form.Control type="text"  id="validationCustom02" placeholder="Languages" value={language} onChange={(e)=> setLanguage(e.target.value)} required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            </Col>
                            <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">ISBN</Form.Label>
                             <Form.Control type="text"  id="validationCustom03" placeholder="ISBN" value="" required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            </Col>
                            <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">ASIN</Form.Label>
                             <Form.Control type="text"  id="validationCustom04" placeholder="ASIN" value="" required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            </Col>
                            <Col md={4} mb={3} >
                            <Form.Label for="validationCustom05">Number of pages</Form.Label>
                             <Form.Control type="number"  id="validationCustom05" placeholder="Number of pages" value="" required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            </Col>
                            <Col md={4} mb={3} >
                            <Form.Label for="validationCustom06">Date of publishing</Form.Label>
                             <Form.Control type="date"  id="validationCustom06" placeholder="date of publishing" value="date" required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                           </Col>

                           <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">Publisher</Form.Label>
                             <Form.Control type="text"  id="validationCustom07" placeholder="Publisher" value="" required></Form.Control>

                            <div class="valid-feedback">
                                Looks good!
                            </div>
                           </Col>

                           <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">Authors</Form.Label>
                             <Form.Control type="text"  id="validationCustom08" placeholder="Authors" value="" required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                           </Col>

                           <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">Categories</Form.Label>
                             <Form.Control type="text"  id="validationCustom09" placeholder="Categories" value="" required></Form.Control>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                           </Col>
                           <Col md={4} mb={3} >
                            <Form.Label for="validationCustom01">Status</Form.Label>
                             <Form.Select>
                                <option>Inactive</option>
                                <option>Active</option>
                               
                            </Form.Select>
                           </Col>
                            <Col md={4} mb={3} >
                            
                                <Form.Group controlId="formFileSm" className="mb-3">
                                    <Form.Label>Upload book cover</Form.Label>
                                    <Form.Control type="file" size="sm" />
                                </Form.Group>
                           </Col>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Label>Brief</Form.Label>
                                  <Form.Control as="textarea" row={3}></Form.Control>
                            </Form>
                        </Row>
                         <button onClick={handleSubmit} style={{margin: "0.5em"}}  class="btn btn-primary" type="submit">Submit</button>
                   </Form>
                </div>
             
            </Container>
            </div>
        

        </motion.div>
      
 
  );
}

export default AddBook;