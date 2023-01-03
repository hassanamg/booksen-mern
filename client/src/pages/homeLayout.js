import classes from './homeLayout.module.css'

import Search from '../components/Search'
// import { useNavigate } from 'react-router-dom'


const HomeLayout = () => {

    // const navigate = useNavigate()
    // const handleClick = () => {

    //     window.setTimeout(() =>{

    //          navigate()
    //     })
       
    // }
    return (

     <div className={classes['bg__img-trnsp']} >
            
        {/* <a href="" className={classes.openBtn}>
             <img className={classes.toggleBar} src={toggleBar} alt="toggle" />
        </a> */}
        <div className={classes.rightContent}>
            <h2><span className={classes['h2__highlighted']}>Booksen</span>online</h2>
            <h5 className="">Read & Download your favourit book free</h5>
            <Search  />
        </div>
     </div>

    )
}
export default HomeLayout