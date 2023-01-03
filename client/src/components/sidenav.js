import styles from './sidenav.module.css'
import {NavData} from '../lib/navData'
import { NavLink } from "react-router-dom";
import imgLogo from '../assets/logo.png'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

 


export default function SideNav(props) {



    return ( 
    
        <div className={props.open?styles['sidenave__customize']:styles.sidenavClosed}>
          <button className={styles.menuBtn} onClick={props.handleCloseSideNav}>
            {props.open? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon/> }
          </button>
          <div className={styles.navLogo}>
               <NavLink to='/'>
                <img className='' src={imgLogo} alt="booksen" />
               </NavLink>
                  
          </div>
          {NavData.map(item => {
 
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={styles.linkText}>{item.text}</span>
                </NavLink>
                
            })}
        </div>
    
        /*<div className={classes.sidenav}>
                    <a href="javascript:void(0)" className={classes.closeBtn}>&times;
                    </a>
                    <div className={classes.navLogo}>
                        <a href="">
                            <img className={classes.imgLogo} src="img/BOOKSEN__logo.png" alt="booksen" />
                        </a>

                    </div>
                    <a href="" className={classes.menuLinks}>
                        <img src="icons/1.svg" alt="books" />
                        View all books
                    </a>
                    <a href="" className={classes.menuLinks}>
                        <img src="icons/2.svg" alt="authors" />
                        View all authors
                    </a>
                </div>
            */   

    
    )
 
}
