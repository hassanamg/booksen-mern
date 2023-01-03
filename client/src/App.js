
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Books from './pages/books';
import Settings from './pages/settings';
import Authors from './pages/authors';
import SideNav from "./components/sidenav";
import HomeLayout from "./pages/homeLayout";
import useBooks from "./hooks/useBooks";
import Search from "./pages/Search";
import History from './components/History'
// import useBooks from "./hooks/fetchData";
import { useState } from 'react';

const App = props => {
 
  //const books = useBooks().data
  const [openSideNav, setOpenSideNav] = useState(false)
 
    
    const toggleOpen = () => {

        setOpenSideNav(!openSideNav)
    }
 
  
   return (
    
    <div>
    <SideNav open={openSideNav} handleCloseSideNav={toggleOpen}/>
   
    <main>
       
      <Routes history={History}> 
         <Route path="/" element={<HomeLayout/>} />
         <Route path={"/books"}  element={<Books />}  />
         <Route path={"/search"}  element={<Search />}  />
         <Route path="authors" element={ <Authors />} />
         <Route path="settings" element={ <Settings />} />
     </Routes>
    </main>
 </div>
   

  
 
);

    
    
     
       
}

export default App;
