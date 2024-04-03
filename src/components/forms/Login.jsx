import React, { useState } from "react";
import IMAGES from "../content/Assets";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ onLogin }) {
  const [inputUserLoginId, setInputUserLoginId] = useState("");
  //const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate a delay (replace with your actual login logic)
      await delay(1000);
      // Simulate a successful login (replace with your actual login logic)
      // Here we're assuming the login is successful if email and password match
      if (inputUserLoginId === "123456") {
        onLogin();
        navigate("/dashboard"); // Redirect to the dashboard upon successful login
      } else {
        setShow(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure if needed
    } finally {
      setLoading(false);
    }
  };

  //const handlePassword = () => {};

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${IMAGES.Img_BackgroundLogin})` }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={IMAGES.Img_BCALogoSmall}
          alt="logo"
        />
        <div className="h4 mb-4 text-center">Sign In</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect NIP/NIK/Vendor NIP.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-3" controlId="userLoginId">
          <Form.Control
            type="text"
            value={inputUserLoginId}
            placeholder="NIP/NIK/Vendor NIP"
            onChange={(e) => setInputUserLoginId(e.target.value)}
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Please place your finger...
          </Button>
        )}
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Bank Central Asia | &copy;2024
      </div>
    </div>
  );
}

export default Login;
