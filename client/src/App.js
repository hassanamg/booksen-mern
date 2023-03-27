
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Books from './pages/books';
import Settings from './pages/settings';
import Authors from './pages/authors';
import SideNav from "./components/sidenav";
import HomeLayout from "./pages/homeLayout";
// import Login from "./pages/Login";
import Login from "./pages/Login/index";
import Search from "./pages/Search";
import History from './components/History'
// import useBooks from "./hooks/fetchData";
import { AuthProvider } from "./Context/context";
import { Component, useState } from 'react';
import { useAuthState } from "./Context/context";
import routes from "./routes/routes";
import AppRoutes from "./routes/AppRoutes";
import { Switch } from "@mui/material";

const App = props => {
  
  //const books = useBooks().data
  
  const [openSideNav, setOpenSideNav] = useState(false)

    const toggleOpen = () => {

        setOpenSideNav(!openSideNav)
    }

   return (
    
    <div>
   
    <main>
     <AuthProvider>
          <SideNav open={openSideNav} handleCloseSideNav={toggleOpen}/>

       <AppRoutes />
     </AuthProvider>
    </main>
 </div>
   

  
 
);

    
    
     
       
}

export default App;
