import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import Register from "./components/login/newUsers/Register"
import LogIn from "./components/login/newUsers/LogIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path={"/register"} exact element={<Register />} />
        <Route path={"/login"} exact element={<LogIn />}/>
        <Route path="/blog/:id" exact element={<Blog />} />
        <Route path="/new" exact element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
