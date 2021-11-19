import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Text = styled.p`
  color: #41a0b3;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: "Raleway";
`;

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // we use square brackets [e.target.name] to use it as a key
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords don't match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if registration is successful

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container style={{ margin: "2rem 0rem 2rem 0rem" }}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={12} lg={9} xl={9}>
            <Card>
              <Card.Header
                className="d-flex flex-column align-items-center"
                style={{ backgroundColor: "#D7E8EB" }}
              >
                <Text size="2rem" weight="500">
                  Sign up
                </Text>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={onChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      name="password2"
                      type="password"
                      placeholder="Confirm Password"
                      value={password2}
                      onChange={onChange}
                    />
                  </Form.Group>

                  <Container className="text-center">
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="text-center">
        <Text size="1.5rem">
          Already have an account?
          <br />
          <Link to="/login">Sign In</Link>
        </Text>
      </Container>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  // we access the 'auth' reducer 's state/object, so that
  // we can check the value of 'isAuthenticated'.
});

export default connect(mapStateToProps, { setAlert, register })(Register);
