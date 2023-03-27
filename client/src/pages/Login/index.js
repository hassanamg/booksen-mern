import Styles from './Login.module.css'
import { Navigate, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import axios from 'axios'
import bookImg from '../../../src/assets/left-img-form.png'
import bloomManImg from '../../../src/assets/bloom-man-reading-a-book-about-science.png'
import { Router } from 'react-router-dom';
import { loginUser } from '../../Context/actions';
import { useAuthDispatch } from '../../Context/context';
import { useAuthState } from '../../Context/context';
import { createBrowserHistory } from "@remix-run/router";

const Login = (props) => {

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [error, setError] = useState(false)
 const [isSuccess, setIsSuccess] = useState("")
 const dispatch = useAuthDispatch()
 const {userDetails ,loading,errorMessage} = useAuthState()
  const history = createBrowserHistory()
 const handleLoginSubmit = async (e) => {

   e.preventDefault()

   let payload = {email, password}
  
  
   try {
    let response =  await loginUser(dispatch, payload)
    if(!response) return
    if(response) {

        
         console.log(userDetails)
         setIsSuccess("You are logged in successfully")
        // window.setTimeout(() => {
              
          history.go(-1)
             
      //   }, 1000)
       
    }
    return
   // console.log(userDetails)
   //  console.log(errorMessage)
   } catch(err) {
     console.log(err)
    
   }
 


} 
 console.log(errorMessage)  


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
                <svg fill="#000000" xmLns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 13 5.9296875 L 6.9296875 12 L 13 18.070312 L 14.5 16.570312 L 9.9296875 12 L 14.5 7.4296875 L 13 5.9296875 z"/></svg>
              </a>
              <Col md={6} sm={12} lg={6} className={Styles["left__side--form"]}>
                
                <div className={Styles["login--img__banner"]}>
                  <img width="100" height="100" src={bloomManImg} alt="" />
                </div>
                <h6 style={{color: "#5a5b5d", fontSize: "11px"}}>Read & Download any book you like for <span style={{fontWeight: "bold", color:"#241008"}}>FREE</span> </h6>
                <form className={`${Styles["form--contact"]} ${Styles["form--login"]}`} method="" autocomplete="on" novalidate="">
                 {
                    errorMessage?<Alert style={{fontSize: 10 + "px"}} variant={"danger"} role="alert">
                       { errorMessage }
                    </Alert> : null
                 }
                 {
                     isSuccess? <Alert style={{fontSize: 10 + "px"}} variant={"success"} role="alert">
                       { isSuccess }
                    </Alert> : ''
                  }
                  
                  {/* <div class="alert alert-success showSuccess" role="alert">
                    This is a success alert—check it out!
                  </div> */}
                    <div className={`${Styles["input-groupe"]} ${Styles["input-groupe-form"]}`} >
                    <svg className={Styles["form--icons"]} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 257.371094 244.019531 L 581.371094 244.019531 L 581.371094 568.019531 L 257.371094 568.019531 Z M 257.371094 244.019531 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#000000" d="M 419.371094 244.019531 C 329.902344 244.019531 257.371094 316.550781 257.371094 406.019531 C 257.371094 495.492188 329.902344 568.019531 419.371094 568.019531 C 508.839844 568.019531 581.371094 495.492188 581.371094 406.019531 C 581.371094 316.550781 508.839844 244.019531 419.371094 244.019531 Z M 419.371094 300.972656 C 442.796875 300.972656 461.789062 323.417969 461.789062 351.105469 C 461.789062 378.789062 442.796875 401.234375 419.371094 401.234375 C 395.945312 401.234375 376.953125 378.789062 376.953125 351.105469 C 376.953125 323.417969 395.945312 300.972656 419.371094 300.972656 Z M 491.167969 498.410156 L 347.570312 498.410156 C 340.371094 498.410156 334.535156 492.574219 334.535156 485.375 C 334.535156 451.683594 372.515625 424.371094 419.371094 424.371094 C 466.226562 424.371094 504.207031 451.683594 504.207031 485.375 C 504.207031 492.574219 498.371094 498.410156 491.167969 498.410156 Z M 491.167969 498.410156 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={Styles["input"]} id="email" type="email" placeholder="Email or username" />
                    </div>
                    <div className={`${Styles["input-groupe"]} ${Styles["input-groupe-form"]}`}>
                      <svg className={Styles["form--icons"]} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 247 331.953125 L 563 331.953125 L 563 478.203125 L 247 478.203125 Z M 247 331.953125 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#000000" d="M 320.796875 478.203125 C 354.175781 478.203125 382.378906 455.554688 391 424.78125 L 465.160156 424.78125 L 465.160156 454.234375 C 465.160156 465.101562 473.984375 473.9375 484.839844 473.9375 C 495.59375 473.9375 504.417969 465.101562 504.417969 454.234375 L 504.417969 424.78125 L 522.882812 424.78125 L 522.882812 454.234375 C 522.882812 465.101562 531.710938 473.9375 542.5625 473.9375 C 553.417969 473.9375 562.246094 465.101562 562.246094 454.234375 L 562.246094 405.078125 C 562.246094 394.210938 553.417969 385.375 542.5625 385.375 L 391 385.375 C 382.378906 354.601562 354.175781 331.953125 320.796875 331.953125 C 280.523438 331.953125 247.753906 364.757812 247.753906 405.078125 C 247.753906 445.398438 280.523438 478.203125 320.796875 478.203125 Z M 320.796875 371.359375 C 339.363281 371.359375 354.480469 386.492188 354.480469 405.078125 C 354.480469 423.664062 339.363281 438.796875 320.796875 438.796875 C 302.234375 438.796875 287.117188 423.664062 287.117188 405.078125 C 287.117188 386.492188 302.234375 371.359375 320.796875 371.359375 Z M 320.796875 371.359375 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className={Styles["input"]} id="password" type="password" placeholder="password" required />
                    </div>
                   <div className={`${Styles["input-groupe"]} ${Styles["input-groupe-submit"] }`}>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 3 C 10.346159 3 6.3077027 5.6628572 4.3203125 9.5449219 A 1.0001 1.0001 0 1 0 6.0996094 10.455078 C 7.7562192 7.2191429 11.107841 5 15 5 C 20.534534 5 25 9.4654664 25 15 C 25 20.534534 20.534534 25 15 25 C 11.107841 25 7.7562192 22.780857 6.0996094 19.544922 A 1.0001 1.0001 0 1 0 4.3203125 20.455078 C 6.3077027 24.337143 10.346159 27 15 27 C 21.615466 27 27 21.615466 27 15 C 27 8.3845336 21.615466 3 15 3 z M 13.990234 9.9902344 A 1.0001 1.0001 0 0 0 13.292969 11.707031 L 15.585938 14 L 4 14 A 1.0001 1.0001 0 1 0 4 16 L 15.585938 16 L 13.292969 18.292969 A 1.0001 1.0001 0 1 0 14.707031 19.707031 L 18.619141 15.794922 A 1.0001 1.0001 0 0 0 18.617188 14.203125 L 14.707031 10.292969 A 1.0001 1.0001 0 0 0 13.990234 9.9902344 z"/></svg>
                        <input onClick={handleLoginSubmit} className={`${Styles["input-btn"]} ${Styles.login}`} disabled={loading} type="submit" value="Login" />
                    </div>
                    <span>Don't have account ? <a href="register.html">Create account</a></span>
                    <span>Forgot password <a href="">Reset now</a></span>
                </form>
                
              </Col>
              <Col md={6} sm={12} lg={6}  className={Styles["right__side--bg"]}>
                <img widt src={bookImg} alt=""/>
              </Col>
           </Row>
        </Container>
    </div>
  )

}


export default Login