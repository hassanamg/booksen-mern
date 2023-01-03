import { motion } from "framer-motion";
import styles from './backdrop.module.css' 
const backdrop = ({children, onClick}) => {

 return (
    <motion.div
      onClick={onClick}
      className={styles['backdrop']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    </motion.div>
 )


}

export default backdrop