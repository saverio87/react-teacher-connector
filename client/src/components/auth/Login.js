import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Text = styled.p`
  color: #41a0b3;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: "Raleway";
`;

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // we use square brackets [e.target.name] to use it as a key
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    // takes the value from formData (already destructured) and passes them to the action 'login'
  };

  // Redirect if login is successful

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
                  Sign in
                </Text>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email address"
                      classname="my-1"
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
                      classname="my-1"
                      minlength="6"
                      value={password}
                      onChange={onChange}
                    />
                  </Form.Group>

                  <Container className="text-center">
                    <Button variant="primary" type="submit">
                      Log in
                    </Button>
                  </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />

      <Container className="text-center">
        <Text size="1.5rem">
          Don't have an account?
          <br />
          <Link to="/register">Sign Up</Link>
        </Text>
      </Container>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  // we access the 'auth' reducer 's state/object, so that
  // we can check the value of 'isAuthenticated'.
});

export default connect(mapStateToProps, { login })(Login);

// When we connect the Login component to the 'auth' state
// the state get passed to the component as a prop, and
// this is why we need propTypes
