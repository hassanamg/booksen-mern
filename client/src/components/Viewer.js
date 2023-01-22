import Styles from './viewerCanva.module.css'
import { useRef,useEffect, useState } from 'react'

import useScript from '../hooks/useScript'
import { margin, style } from '@mui/system'

const Viewer = ({isbn}) => { 
   
  
const canvasRef = useRef()     
   
   // Initialize loaded state as false
   const [loaded, setLoaded] = useState(false);  
   // Create alert message if book not found in Google Database
   function alertNotFound() {            
       alert("could not embed the book!");
    }
   // Add a Google Books script tag and event listener if the tag has loaded
   useEffect(()=> {      
      const scriptTag = document.createElement('script')                
      scriptTag.src= 'https://www.google.com/books/jsapi.js'       
      scriptTag.addEventListener('load', ()=>setLoaded(true))       
      scriptTag.id = "google-script"      
      document.body.appendChild(scriptTag);       
    }, []);      
   // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
   useEffect(()=>{            
       if (!loaded) return             
       else{         
            if(window.viewer){            
               let viewer = new window.google.books.DefaultViewer
               (canvasRef.current); 
               viewer.load(`ISBN:${isbn}`, alertNotFound);                    
             }        
             else{          
               window.google.books.load()                             
               window.google.books.setOnLoadCallback(() => {                 
               let viewer = new window.google.books.DefaultViewer      
                   (canvasRef.current);         
               window.viewer = viewer         
               viewer.load(`ISBN:${isbn}`, alertNotFound);        
             })
           }              
       }}, [loaded])      
       return (      
          <div>        
              {loaded ?             
                   <div>                
                      <div ref={canvasRef} id="viewerCanvas"></div>            
                   </div> : 
              'Script not loaded'}      
          </div>    )
  


}

export default Viewer