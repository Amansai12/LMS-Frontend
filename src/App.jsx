import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";
import Lend from "./components/Lend";
import * as jose from 'jose'
import { userContext } from "./context/usercontext";
import { useContext, useEffect, useState } from "react";
import Privateroute from "./components/Privateroute";
import Login from "./Pages/Login";
import AdminRoute from "./components/AdminRoute";
import Services from "./Pages/Services";
import BookUpload from "./Pages/BookUpload";
import Borrow from "./components/Borrow";
import Books from "./Pages/Books";
import TimedOut from "./Pages/TimedOut";
import Students from "./Pages/Students";
import Profile from "./Pages/Profile";
import MyBorrows from "./components/MyBorrows";
import UserProfile from "./Pages/UserProfile";
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';
import UpdateBook from "./components/UpdateBook";
function App() {
  const { user, setUser } = useContext(userContext);
  
  
  useEffect(() => {
    const data = localStorage.getItem("userdetails");
    const c = Cookies.get('auth')
    const x = jwtDecode(c)
    
    if (data) {
      const res = JSON.parse(data);
      setUser(x);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Search />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Privateroute />}>
          <Route path="myborrows" element={<MyBorrows />} />
          <Route path="edit" element={<Profile />} />
          <Route path="" element={<UserProfile />} />
        </Route>

        <Route path="admin" element={<AdminRoute />}>
          <Route path="" element={<Admin />} />
          <Route path="lend" element={<Lend />} />
          <Route path="upload" element={<BookUpload />} />
          <Route path="update" element={<UpdateBook />} />
          <Route path="borrows" element={<Borrow />} />
          <Route path="books" element={<Books />} />
          <Route path="timedout" element={<TimedOut />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
