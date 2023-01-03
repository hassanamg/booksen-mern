

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './books.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import { useMemo, useState } from 'react';
import useBooks from '../hooks/useBooks';
import Modal from '../components/modal';

const Authors = () => {

    return (
      <div className={styles.container}>
      <Container>
            <Row>
              <h1>Authors</h1>
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
               
              
                
               </AnimatePresence>
              

            <Row style={{height: "1100px", marginTop: '30px' }}>
    
           <Col md={3} >
                
                <figure>
             
                 
                  <img src='' alt='' />
                  <figcaption className={styles['book__title']}></figcaption>
                  <figcaption className={styles['book__author']}>by<span></span></figcaption>
                  <figcaption className={styles['payment__case']}>Free</figcaption>
                   <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     className={styles['view__more-link']}
                     
                   > 
                        View more
                   </motion.button>
                 
                 
               </figure>
               
              </Col>

      
            </Row>
         </Container>
             </div>
    )
}
export default Authors