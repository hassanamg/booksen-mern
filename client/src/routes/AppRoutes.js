
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeLayout from "../pages/homeLayout";
// import Login from "./pages/Login";
import Login from "../pages/Login/index";
import Search from "../pages/Search";
import Books from '../pages/books';
import Settings from '../pages/settings';
import Authors from '../pages/authors';
import Register from "../pages/register/index.js";
import { useAuthState } from "../Context/context";
import { createBrowserHistory } from "@remix-run/router";
import { useNavigate } from "react-router-dom";
const AppRoutes = () => {

  const userdetails = useAuthState()

  return (
    <Routes> 
         <Route path="/" element={<HomeLayout/>} />
         <Route path={"/books"}  element={<Books />}  />
         <Route path={"/search"}  element={<Search />}  />
         <Route path="/authors" element={ <Authors />} />
         <Route path="/me" element={ !Boolean(userdetails.token)? <Navigate to="/login" /> : <Settings />} /> 
          {/* <Route path="/settings/manage/books" /> */}
         <Route path="/signup" element={   !Boolean(userdetails.token)? <Register /> : <Navigate to="/settings" />} />
         <Route path="/login" element={ <Login /> }/> 

     </Routes>
  )
}

export default AppRoutes