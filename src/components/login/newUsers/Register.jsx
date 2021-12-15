import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from "react-router-dom"
import { Form, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"




const Register = (props) => {

  const navigate = useNavigate()

  const schema = yup.object({
    firstName: yup.string().required("Name is required"),
    lastName: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  
  const { values, handleChange, handleSubmit, errors, setFieldValue } =
  useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch(`http://localhost:3001/authors/register`, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        })
        if(response.ok) {
          const  data  = await response.json()
          const token = data.token
          console.log('==================> token', token)
          localStorage.setItem('TOKEN',  token )
  
          setFieldValue({
            email: "",
            password: "",
          })
  
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }
    },
    schema: schema
    })


  return (
    <div className="col3">
    <Col sm={6} md={4} className='mt-5 mx-auto'>
            <div className="register">
              <h4 className="SignInHeading register1">SIGN UP</h4>
              <Form noValidate className='register' onSubmit={handleSubmit}>
                <Form.Group className='mt-3' controlId="formBasicUserName">
                  <Form.Control
                    size="lg"
                    className="SignUpFormControls register"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mt-3' controlId="formBasicUserName">
                  <Form.Control
                    size="lg"
                    className="SignUpFormControls register"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mt-3' controlId="formBasicEmail">
                  <Form.Control
                    type="Enter email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    className="SignUpFormControls register"
                    size="lg"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>


                <Form.Group className='mt-3' controlId="formBasicPassword">
                  <Form.Control
                    className="SignUpFormControls register"
                    size="lg"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  className="SignUpButton register text-dark customBtn mt-3"
                  type="submit"
                >
                  Sign Up
                </Button>
                <Form.Text>
                  Already a User?{" "}
                  <Link to="/login">
                    <a href="#signin" onClick={props.toggle}>
                      Sign In
                    </a>
                  </Link>
                </Form.Text>
              </Form>
            </div>
    </Col>
    </div>
  );
};

export default Register;
