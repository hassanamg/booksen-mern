
import Styles from './register.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cherryImg from '../../../src/assets/cherry-657.png'
import {GetStartedItem, RegisterForm} from '../../components/Carousel/carouselItems';

const Register = () => {

 return ( 
     <div className={Styles["container__bg"]}>
   
         <div className={Styles["video__bg"]}>
                <video className={Styles["bg__video_content"]} autoPlay={true} muted={true} loop={true} >
                    <source src="video--1.mp4" type="video/mp4" />
                    <source src="video--1.webm" type="video/webm" />
                </video>
        </div>
        <Container style={{maxWidth: "900px",marginTop: 3.5 + "em"}}>
           <Row className={`${Styles["card--auth"]}`}>
              <a style={{position: "absolute", top:'2%'}} href="/">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 13 5.9296875 L 6.9296875 12 L 13 18.070312 L 14.5 16.570312 L 9.9296875 12 L 14.5 7.4296875 L 13 5.9296875 z"/></svg>
              </a>
              <Col md={6} sm={12} lg={6}>
                  <div className={Styles["slider"]}>
                   <div className={Styles["slide"]} >
                       
                      {/* <GetStartedItem /> */}

                      <RegisterForm />
                    </div>
                   {
                    <div className={Styles["slide"]} >


                    </div>

                   }

                    {/* <div class="register__success--slide">
                        <h2>Your account has been created</h2>
                    </div> */}

                    {/* <div class="slider__controls">

                       <button class="slider__btn slider__btn--left">
                          <svg fill="#777" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="15px" height="15px">    <path d="M 13 5.9296875 L 6.9296875 12 L 13 18.070312 L 14.5 16.570312 L 9.9296875 12 L 14.5 7.4296875 L 13 5.9296875 z"/></svg>
                      </button>
                      <div class="dots"></div>
                      <button class="slider__btn slider__btn--right">
                          <svg fill="#777" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="13px" height="13px"><path d="M25.977,59.542c-1.04,0-2.079-0.403-2.863-1.207c-1.542-1.581-1.512-4.114,0.069-5.656l17.113-16.698l-17.074-16.66	c-1.581-1.542-1.611-4.075-0.069-5.656c1.544-1.582,4.076-1.612,5.657-0.069l20.008,19.522c0.771,0.752,1.206,1.785,1.206,2.863	s-0.435,2.11-1.206,2.863L28.771,58.404C27.992,59.164,26.984,59.542,25.977,59.542z"/></svg>
                      </button>
        
                    </div> */}
                </div>
            
              </Col>
              <Col md={6} sm={12} lg={6} className={Styles["right__side--bg"]}>
                <img  src={cherryImg} alt=""/>
              </Col>
           </Row>
        </Container>
    </div>
 )   
}

export default Register