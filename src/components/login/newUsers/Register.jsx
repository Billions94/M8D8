import React from "react"
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom"
import { Form, Col, Button } from "react-bootstrap"


const schema = yup.object({
  username: yup.string().required("Please Enter a username"),
  email: yup.string().email().required("Please Enter your Email"),
  confirmEmail: yup
    .string()
    .email()
    .required()
    .oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = (props) => {


  return (
    <div className="col3">
    <Col sm={6} md={4} className='mt-5 mx-auto'>
       <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            username: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <div className="register">
              <h4 className="SignInHeading register1">SIGN UP</h4>
              <Form noValidate className='register' onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUserName">
                  <Form.Control
                    size="lg"
                    className="SignUpFormControls register"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Username"
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
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

                <Form.Group controlId="formBasicConfirmEmail">
                  <Form.Control
                    type="email"
                    className="SignUpFormControls register"
                    size="lg"
                    name="confirmEmail"
                    value={values.confirmEmail}
                    onChange={handleChange}
                    placeholder="Confirm Email"
                    isInvalid={!!errors.confirmEmail}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.confirmEmail}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
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

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control
                    className="SignUpFormControls register"
                    size="lg"
                    name="confirmPassword"
                    onChange={handleChange}
                    type="password"
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback className="FeedBack" type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  className="SignUpButton register text-dark customBtn"
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
          )}
        </Formik>
    </Col>
    </div>
  );
};

export default Register;
