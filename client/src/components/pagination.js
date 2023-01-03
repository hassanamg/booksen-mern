

import styles from './pagination.module.css'
import Container from 'react-bootstrap/Container';
import useBooks from '../hooks/useBooks';
import { useState } from 'react';
const Pagination = (props) => {
   
  

   
   
        const pageNumbers = []
        for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++ ) {

            pageNumbers.push(i)
        }
        return (
        
           <Container className={styles['container']}>
            <ul className={styles['pagination']}>

                
                  {

                  props.isFirst? <li className={styles['page-item']}>
                        <a onClick={(e) => { e.preventDefault(); props.prevPage() }} className={styles['page--item-prev']} href='' >
                        Prev
                        </a>
                    </li> : ''

                  } 

               
                { console.log(pageNumbers.length)}

                
                { 
                    pageNumbers.map(number => {

                      return (  <li key={number} className={styles['page-item']}>
                            <a onClick={(e) =>{ e.preventDefault(); props.paginate(number) }} className={styles['page-link']} href='!#' >
                            {number}
                            </a>
                        </li>
                      )
                    })
                }
                
               { props.isLast?<li className={styles['page-item']}>
                <a onClick={(e) => { e.preventDefault(); props.nextPage() }} className={styles['page--item-next']} href='' >
                 Next
                </a>
                </li> : '' 
                }
                
            </ul>

            </Container>
       )
    
}

export default Pagination