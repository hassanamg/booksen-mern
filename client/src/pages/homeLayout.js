import classes from './homeLayout.module.css'

import Search from '../components/Search'
import Login from './Login'
// import { useNavigate } from 'react-router-dom'
import Profile from '../components/profile'
import { useAuthState } from '../Context/context'
const HomeLayout = () => {

    const userDetails = useAuthState()
    const user = localStorage.getItem("currentUser")
    return (
    
     <div className={classes['bg__img-trnsp']} >

      
      
        {!user?<div className={classes['log__reg']}>
            <div className={classes['authentication']} id="authentication" >
            <a id="login" className={classes["identification"]} href="login">Sign in</a>
            <a id="register" className={classes["identification"]} href="signup">Create account</a>
            </div>
            
        </div> :   <Profile />
        }
       
        <div className={classes.rightContent}>
            <h2><span className={classes['h2__highlighted']}>Booksen</span>online</h2>
            <h5 className="">Read & Download your favourit book free</h5>
            <Search  />
        </div>
     </div>

    )
}
export default HomeLayout