
// import { useEffect, useRef, useState } from "react"

// const useScript =  (url) => {
//   const [loaded, setIsLoaded] = useState(false)
//   useEffect(() => {
   
//       const script = document.createElement('script')
//       script.src = url
//       script.id = "google-script"
//       script.addEventListener('load', () => setIsLoaded(true))
//       document.head.appendChild(script)
//       console.log(loaded)
//       return () =>  script.removeEventListener('load', () =>  setIsLoaded(false))
    
//   }, [])

//   useEffect(() => {

//       useEffect(()=>{            
//        if (!loaded) return             
//        else{         
//             if(window.viewer){            
//                let viewer = new window.google.books.DefaultViewer
//                (canvasRef.current); 
//                viewer.load('ISBN:'+ ISBN_num, alertNotFound);                    
//              }        
//              else{          
//                window.google.books.load()                             
//                window.google.books.setOnLoadCallback(() => {                 
//                let viewer = new window.google.books.DefaultViewer      
//                    (canvasRef.current);         
//                window.viewer = viewer         
//                viewer.load('ISBN:'+ ISBN_num, alertNotFound);        
//              })
//            }              
//        }}, [loaded])  
//   })
// }

// export default useScript