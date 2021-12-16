import React, { useEffect, useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";

const NavBar = () => {

  const location = useLocation()


  return (
    <>
    {
      location.pathname === '/home' && (
        <Navbar className='customNav' expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
          <div className="d-flex customDiv mr-2">
            <img src="https://img.icons8.com/ios-filled/50/000000/google-glass.png" width='27px'/>
            <p className='ml-3'>ai Blogs</p>
          </div>
          </Navbar.Brand>
  
          <Button
            as={Link} to="/new" 
            className="blog-navbar-add-button bg-dark" 
            size="lg">
            Post Article
          </Button>
        </Container>
      </Navbar>
      )
    }

    {
      location.pathname === '/register' && (
        <Navbar className='customNav' expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
          <div className="d-flex customDiv mr-2">
            <img src="https://img.icons8.com/ios-filled/50/000000/google-glass.png" width='27px'/>
            <p className='ml-3'>ai Blogs</p>
          </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      )
    }

    {
      location.pathname === '/login' && (
        <Navbar className='customNav' expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
          <div className="d-flex customDiv mr-2">
            <img src="https://img.icons8.com/ios-filled/50/000000/google-glass.png" width='27px'/>
            <p className='ml-3'>ai Blogs</p>
          </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      )
    }

    {
      location.pathname === '/' && (
        <Navbar className='customNav' expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
          <div className="d-flex customDiv mr-2">
            <img src="https://img.icons8.com/ios-filled/50/000000/google-glass.png" width='27px'/>
            <p className='ml-3'>ai Blogs</p>
          </div>
          </Navbar.Brand>
            <div className="d-flex">
            <Button
              as={Link} to="/register" 
              className="blog-navbar-add-button" 
              size="lg">
              Register
            </Button>
            <Button
              as={Link} to="/login" 
              className="blog-navbar-add-button" 
              size="lg">
              Login
            </Button>
            <a href="http://localhost:3001/authors/googleLogin">
            <Button
              className="blog-navbar-add-button" 
              size="lg">
              google Login
            </Button>
            </a>
            </div>
        </Container>
      </Navbar>
      )
    }
    </>
  );
};

export default NavBar;
