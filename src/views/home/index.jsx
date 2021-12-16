import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";



export const useAuthGuard = () => {
  const params = new URLSearchParams(window.location.search)
  console.log('===============> token', params.get("accessToken"))
  const navigate = useNavigate()

  useEffect(() => {
    
    const token =
      localStorage.getItem("ACCESS_TOKEN") || params.get("accessToken")

    if (!token) {
      navigate("/login");
    } else if (params.get("accessToken")) {
      localStorage.setItem("ACCESS_TOKEN", token);
      navigate("/home");
    }
  }, []);
};


export default function home() {

  useAuthGuard()

    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList />
      </Container>
    );
  }

