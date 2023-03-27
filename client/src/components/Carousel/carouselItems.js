
import Styles from './carouselItems.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signup } from '../../Context/actions'
import { useAuthDispatch} from '../../Context/context'
import { useAuthState } from '../../Context/context'
import { useState } from 'react'
import { createBrowserHistory } from "@remix-run/router";

  const history = createBrowserHistory()

export function GetStartedItem() {

    return (

       <div className={Styles["get__started--slide"]}>
        <h1 style={{marginTop: "2em", marginBottom: "1em", textAlign: "left", color: "#000"}}><span className={Styles["h2__highlighted"] }>Booksen</span>online</h1>

        <h3 style={{marginTop: "10px"}}>Your free library for reading books online in differents fields</h3>
        <p>What are your waiting for , Create your free account </p>
        <a className={Styles["getStarted"]} href="#">Get started</a>
        </div> 

    )

}

export function RegisterForm() {



 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const userDetails = useAuthState()
 const dispatch = useAuthDispatch()
  const handleSignupSubmit = (e) => {

    e.preventDefault()
    let payload = {email, name, password, confirmPassword}
    try {
     const response = signup(dispatch, payload)
     if(!response) return
     if(response) {

        console.log(userDetails)
        //setIsSuccess("Your account created successfully")
         window.setTimeout(() => {
              
              history.go(-1)
         }, 1000)
       
     }
    } catch(err) {

        console.log(err)
    }
  }

return (

    <div  className={Styles["form__register--slide"]} style={{width: "100%"}}>
        <h3>Create your account</h3>
        <form className={Styles["form--contact"]} method="" autocomplete="on" novalidate="">
            <Form.Group style={{width: "80%"}} className={Styles['register--form__groupe']}>
                <svg style={{marginTop: "0.7em", marginLeft: "0.5em"}} fill="#000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="15px" height="15px">    <path d="M 4 4 C 2.976 4 2.1404375 4.772625 2.0234375 5.765625 L 12 12 L 21.976562 5.765625 C 21.859563 4.772625 21.024 4 20 4 L 4 4 z M 2 7.7519531 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 7.7519531 L 12.529297 13.669922 C 12.205297 13.871922 11.794703 13.871922 11.470703 13.669922 L 2 7.7519531 z"/></svg>
                <Form.Control  className={Styles["input"]} value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email" />
                <Form.Text style={{fontSize: "0.6em"}} className='text-muted'>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group style={{width: "80%"}} className={Styles['register--form__groupe']}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 257.371094 244.019531 L 581.371094 244.019531 L 581.371094 568.019531 L 257.371094 568.019531 Z M 257.371094 244.019531 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#000000" d="M 419.371094 244.019531 C 329.902344 244.019531 257.371094 316.550781 257.371094 406.019531 C 257.371094 495.492188 329.902344 568.019531 419.371094 568.019531 C 508.839844 568.019531 581.371094 495.492188 581.371094 406.019531 C 581.371094 316.550781 508.839844 244.019531 419.371094 244.019531 Z M 419.371094 300.972656 C 442.796875 300.972656 461.789062 323.417969 461.789062 351.105469 C 461.789062 378.789062 442.796875 401.234375 419.371094 401.234375 C 395.945312 401.234375 376.953125 378.789062 376.953125 351.105469 C 376.953125 323.417969 395.945312 300.972656 419.371094 300.972656 Z M 491.167969 498.410156 L 347.570312 498.410156 C 340.371094 498.410156 334.535156 492.574219 334.535156 485.375 C 334.535156 451.683594 372.515625 424.371094 419.371094 424.371094 C 466.226562 424.371094 504.207031 451.683594 504.207031 485.375 C 504.207031 492.574219 498.371094 498.410156 491.167969 498.410156 Z M 491.167969 498.410156 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                <Form.Control className={Styles["input"]}  value={name} onChange={(e) => setName(e.target.value)} id="username" type="username" placeholder="Username" />
            </Form.Group >
            <Form.Group style={{width: "80%"}} className={Styles['register--form__groupe']}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 247 331.953125 L 563 331.953125 L 563 478.203125 L 247 478.203125 Z M 247 331.953125 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#000000" d="M 320.796875 478.203125 C 354.175781 478.203125 382.378906 455.554688 391 424.78125 L 465.160156 424.78125 L 465.160156 454.234375 C 465.160156 465.101562 473.984375 473.9375 484.839844 473.9375 C 495.59375 473.9375 504.417969 465.101562 504.417969 454.234375 L 504.417969 424.78125 L 522.882812 424.78125 L 522.882812 454.234375 C 522.882812 465.101562 531.710938 473.9375 542.5625 473.9375 C 553.417969 473.9375 562.246094 465.101562 562.246094 454.234375 L 562.246094 405.078125 C 562.246094 394.210938 553.417969 385.375 542.5625 385.375 L 391 385.375 C 382.378906 354.601562 354.175781 331.953125 320.796875 331.953125 C 280.523438 331.953125 247.753906 364.757812 247.753906 405.078125 C 247.753906 445.398438 280.523438 478.203125 320.796875 478.203125 Z M 320.796875 371.359375 C 339.363281 371.359375 354.480469 386.492188 354.480469 405.078125 C 354.480469 423.664062 339.363281 438.796875 320.796875 438.796875 C 302.234375 438.796875 287.117188 423.664062 287.117188 405.078125 C 287.117188 386.492188 302.234375 371.359375 320.796875 371.359375 Z M 320.796875 371.359375 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                <Form.Control className={Styles["input"]}  value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="password" />
            </Form.Group>
            <Form.Group style={{width: "80%"}} className={Styles['register--form__groupe']}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 247 331.953125 L 563 331.953125 L 563 478.203125 L 247 478.203125 Z M 247 331.953125 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#000000" d="M 320.796875 478.203125 C 354.175781 478.203125 382.378906 455.554688 391 424.78125 L 465.160156 424.78125 L 465.160156 454.234375 C 465.160156 465.101562 473.984375 473.9375 484.839844 473.9375 C 495.59375 473.9375 504.417969 465.101562 504.417969 454.234375 L 504.417969 424.78125 L 522.882812 424.78125 L 522.882812 454.234375 C 522.882812 465.101562 531.710938 473.9375 542.5625 473.9375 C 553.417969 473.9375 562.246094 465.101562 562.246094 454.234375 L 562.246094 405.078125 C 562.246094 394.210938 553.417969 385.375 542.5625 385.375 L 391 385.375 C 382.378906 354.601562 354.175781 331.953125 320.796875 331.953125 C 280.523438 331.953125 247.753906 364.757812 247.753906 405.078125 C 247.753906 445.398438 280.523438 478.203125 320.796875 478.203125 Z M 320.796875 371.359375 C 339.363281 371.359375 354.480469 386.492188 354.480469 405.078125 C 354.480469 423.664062 339.363281 438.796875 320.796875 438.796875 C 302.234375 438.796875 287.117188 423.664062 287.117188 405.078125 C 287.117188 386.492188 302.234375 371.359375 320.796875 371.359375 Z M 320.796875 371.359375 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                <Form.Control className={Styles["input"]}  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" type="password" placeholder="Confirm password"/>
            </Form.Group>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 3 C 10.346159 3 6.3077027 5.6628572 4.3203125 9.5449219 A 1.0001 1.0001 0 1 0 6.0996094 10.455078 C 7.7562192 7.2191429 11.107841 5 15 5 C 20.534534 5 25 9.4654664 25 15 C 25 20.534534 20.534534 25 15 25 C 11.107841 25 7.7562192 22.780857 6.0996094 19.544922 A 1.0001 1.0001 0 1 0 4.3203125 20.455078 C 6.3077027 24.337143 10.346159 27 15 27 C 21.615466 27 27 21.615466 27 15 C 27 8.3845336 21.615466 3 15 3 z M 13.990234 9.9902344 A 1.0001 1.0001 0 0 0 13.292969 11.707031 L 15.585938 14 L 4 14 A 1.0001 1.0001 0 1 0 4 16 L 15.585938 16 L 13.292969 18.292969 A 1.0001 1.0001 0 1 0 14.707031 19.707031 L 18.619141 15.794922 A 1.0001 1.0001 0 0 0 18.617188 14.203125 L 14.707031 10.292969 A 1.0001 1.0001 0 0 0 13.990234 9.9902344 z"/></svg>
                <Button className={Styles['button--submit']} onClick={handleSignupSubmit} type="submit" value="Create ">Create</Button>
                <span>Already member ?<a href="login.html">Sign in now</a></span>
            
        </form> 
        </div>
                

)

}



