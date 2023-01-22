import Button from "react-bootstrap/esm/Button"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"
import Dropdown from 'react-bootstrap/Dropdown';
import { initialState } from "../Context/reducer";
import { useAuthDispatch } from "../Context/context";
import { useAuthState } from "../Context/context";
import { logout } from "../Context/actions";
import { Navigate, useNavigate } from "react-router-dom";
import Styles from './profile.module.css'
import { useState } from "react";
import { createBrowserHistory } from "@remix-run/router";

// import profileImgPath from ''
const Profile = (props) => {

   const dispatch = useAuthDispatch()
   const userDetails = useAuthState()
   const navigate = useNavigate()
   const [active, setActive] = useState(false)
   const user = localStorage.getItem("currentUser")
  const history = createBrowserHistory()

  //  const token = userDetails.token
  //  console.log(token)
   const handleLogoutSubmit = (e) => {

      //e.preventDefault()
      logout(dispatch);
     
      ///window.location.reload('/')
      //navigate('/')
      //history.go(0)

   }
   console.log(userDetails.userDetails.photo)
   console.log(active)
   return (
    <div style={{ textAlign: "center" }}>
    
    { user? <div className={Styles["action"]}>
        <div className={`${Styles["profile"]}`} onClick={() => { setActive(!active)}} >
          <img   src={`./../images/users/${userDetails.userDetails.photo}`} />
        </div>
        <div className={`${Styles["menu"]} ${Styles[active? "active" : ""]}`} >
          <h3 style={{fontSize: 12 + 'px'}}>{userDetails.userDetails.name} <br/><span>{userDetails.userDetails.role}</span></h3>
          
          <ul style={{paddingLeft: 1 + 'em'}}>
            <li><img src="./../icons/user--profile.png"/><a href="">My profile</a></li>
           {
           userDetails.userDetails.role === "admin"? <li><img src="profile.png"/><a href="">Manage books</a></li> : ""

            }
            <li><img src="./../icons/setting--profile.png"/><a href="/me">Settings</a></li>
            <li><img src="./../icons/help--profile.gif"/><a href="">Help</a></li>
            <li><img src="./../icons/logout--profile.png"/><a onClick={handleLogoutSubmit} href="/login">Logout</a></li>
          </ul>
        </div>
      </div> : ''}
    </div> 
 
   
   )
   

}

export default Profile