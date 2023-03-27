import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './modal.module.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import moment from 'moment';

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

  const Modal = (props,{ handleClose, text }) => {

    return (
      
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
                     
        <div className={styles['overlay']} onClick={handleClose}></div>
            <div className={styles.popup} id="popup">
            <Container id='blur'>
                <button onClick={props.handleClose} className={styles['close__popup']}>X</button>
                <Row>
                <Col  className={styles["desc__img"]}>
                    <Image thumbnail={false} className={styles["book__img--desc"]} src={`../images/${props.imageCover}`} alt="java" />
                </Col>
                <Col md={9} sm={3}>
                    <div className={styles["book__info"]}>
                        <span>{moment(props.date).format("MMM DD, YYYY")}</span>
                        <h2 className={styles['popup__title']}>{props.title}</h2>
                    
                        <span>{props.isbn}</span>
                        <span>{props.category}</span>
                        <div className={styles.line}></div>
                        <div className={styles["book__desc"]}>
                        <h2>Summary</h2>
                        <p className={styles['popup_book__description']}>
                            {props.description}
                        </p>

                        </div>
                        <span><Image roundedCircle="false" className={styles.avatar} src={`../images/authors/${props.authorImg}`} alt={props.authorName} />{props.author}</span>
                        <div className={styles["action__btn"]}>
                        <button className={styles.button} type="button"><i className="fa-solid fa-book-open"></i>Read book</button>
                        <button className={styles.button}  type="button"><i className="fa-solid fa-download"></i>Download as PDF</button>
                        </div>
                    </div>
                    </Col>

                
                </Row>
            </Container>
            </div>
        

        </motion.div>
      
    );
  };

  
  export default Modal;