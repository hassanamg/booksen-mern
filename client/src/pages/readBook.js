

// import { useRef,useEffect, useState } from 'react'
// import useScript from '../hooks/useScript'


// const ReadBook = () => { 

// const canvasRef = useRef()  
//     //useScript("https://www.google.com/books/jsapi.js")
   
//   const [loaded, setIsLoaded] = useState(false)
//  function alertNotFound() {            
//        alert("could not embed the book!");
//     }
// //   useEffect(() => {
   
// //     //  const script = document.createElement('script')
// //     //  script.src = 'https://www.google.com/books/jsapi.js'

// //     //  script.addEventListener('load', () => setIsLoaded(true))
// //     //  script.id = "google-script"
// //     //  document.body.appendChild(script)
// //     //  return () => {

// //     //     document.body.removeChild(script)
// //      }
// //   }, [])
  
  
// useEffect(() => {
//      if(!loaded) return
//      window.google.books.load()
//      window.google.books.setOnLoadCallback(function () {

//          var viewer =  new window.google.books.DefaultViewer(canvasRef);  
//          viewer.load('ISBN:97829150027372915002738')
//          //console.log(google.books.DefaultViewer())
//          console.log("hassan")

//      })
//     console.log(window)
//   }, [loaded])
//   return (
//     <div>
//     {
//         loaded? <div>                
//                       <div ref={canvasRef} id="viewerCanvas" style={{width: "600px",  height:"500px"}}></div>            
//                    </div> : 'Script not loaded'    
         
//     }
//     </div>
//   )

// }

// export default ReadBook