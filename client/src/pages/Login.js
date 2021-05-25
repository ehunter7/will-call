import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
// import { setAuth } from "../utils/GlobalState";
import { Link, useHistory } from "react-router-dom";
import API from '../utils/api';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // used for firebase
  // const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  })
  const history = useHistory();

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userInput);
    //! need to write login logic
    API.login(userInput).then(res => {
      console.log("res.data loged in" + res.data);
    });

    setLoading(false);
  }

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
                  <Form.Control name='username' type="text" ref={emailRef} required onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='password' type="password" ref={passwordRef} required onChange={(e) => handleChange(e)}/>
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
