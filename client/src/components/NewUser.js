import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import API from "../utils/api";
import { useHistory } from "react-router-dom";

const NewUser = () => {
  const history = useHistory();
  const [error, setError] = useState();
  const [newUser, setNewUser] = useState({
    username: "",
    fullname: "",
    password: "",
    role: "Customer Service Rep",
  });

  const { username, fullname, password, role } = newUser;

  const handleChange = (e) => {
    return setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      username,
      fullname,
      password,
      role,
    });

    try {
      API.newuser(newUser).then((res) => {
        history.push("/");
      });
    } catch (error) {
      setError("Failed to log in");
      console.log(error);
    }
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center text-secondary"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 text-secondary" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-3">Create New User</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    onChange={(e) => handleChange(e)}
                  >
                    <option>Admin</option>
                    <option>Customer Service Rep</option>
                    <option>Receiver</option>
                  </Form.Control>
                </Form.Group>
                <Button className="w-100" onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default NewUser;
