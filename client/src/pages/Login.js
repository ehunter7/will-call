import React, { useRef, useState, useContext } from "react";

import { Form, Card, Button, Alert, Container } from "react-bootstrap";

import { authContext, useStateContext } from "../utils/GlobalState";
import { Link, useHistory } from "react-router-dom";
import API from "../utils/api";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // used for firebase
  // const { login } = useAuth();
  // const { authData, setAuth } = React.useContext(authContext);
  const { authData, setAuth } = useContext(authContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      API.login(userInput).then((res) => {
        if (res.data === 499) {
          return setError("Invalid Username");
        } else if (res.data === 498) {
          return setError("Invalid Password");
        } else {
          setError("");
        }
        setAuth({
          ...authData,
          isAuthenticated: true,
          loading: false,
          user: res.data,
        });
        setLoading(false);
        history.push("/");
      });
    } catch (errors) {
      console.log("[ERROR] error on login page");
      console.log(errors.response.data.message);
    }
  };

  return (
    <>
      <Container
        className="d-flex algin-items-center justify-content-center mt-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 text-secondary" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group id="email">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    ref={emailRef}
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    ref={passwordRef}
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Button disabled={loading} className="w-100" type="submit">
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
