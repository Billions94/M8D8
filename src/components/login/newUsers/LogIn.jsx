import React from "react";
import { useFormik } from "formik";
import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "./axios";
import * as yup from "yup";
import "./styles.css";


const LogIn = () => {

  const navigate = useNavigate()

  const schema = yup.object({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
  useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  onSubmit: async (values) => {
    try {
      const response = await fetch(`http://localhost:3001/authors/login`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if(response.ok) {
        const  data  = await response.json()
        const { accessToken, refreshToken } = data
        
        localStorage.setItem('TOKEN',  accessToken)
        localStorage.setItem('REFRESH_TOKEN',  refreshToken)

        setFieldValue({
          email: "",
          password: "",
        })

        navigate('/home')
      }
    } catch (error) {
      console.log(error)
    }
  },
  schema: schema
  })


  return (
    <div className="mt-5  mx-auto signUpContainer">
      <Col className='mx-auto customForm' sm={6} md={4}>
      <h4 className='register1'>log-In</h4>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control 
          className="SignUpFormControls register"
          name="email"
          type="email" 
          value={values.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          placeholder="Enter email"/>
          <Form.Control.Feedback className="FeedBack" type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          className="register"
          name="password"
          type="password" 
          value={values.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
          placeholder="Password"/>
          <Form.Control.Feedback className="FeedBack" type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} className='customBtn' variant="primary" type="submit">
          <span className='text-dark'>log In</span>
        </Button>
      </Form>
      </Col>
    </div>
  );
};

export default LogIn;
