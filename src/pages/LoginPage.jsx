import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";


import "./css/Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <Fragment>
      <section id="login">
        <div className="container login-container d-flex align-items-center justify-content-center">
          <Form onSubmit={login} className="login-form">
            <h3>Login</h3>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please try again!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <Form.Control.Feedback type="invalid">
                Please try again!
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-3" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
