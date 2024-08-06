import "react-toastify/dist/ReactToastify.css";

import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login_main() {
  const email = "rakstar@gmail.com";
  const password = "cecar123";
  const navigate= useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = e.target.elements.formBasicEmail.value;
    const enteredPassword = e.target.elements.formBasicPassword.value;

    try {
      if (enteredEmail === email && enteredPassword === password) {
        console.log("User logged in Successfully");
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        navigate("/Dashboard")
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Form style={{marginLeft:30,marginTop:100,marginRight:30 ,width:400}} onSubmit={handleSubmit}>
        <h3>Login</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="d-grid">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login_main;
