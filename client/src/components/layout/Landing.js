import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import background from "../../assets/hero.jpg";

import {
  PlainLink,
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../utils/styledComponents";

import { Text, PrimaryText } from "../../utils/styledComponents";

import { Container, Row, Col } from "react-bootstrap";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-vh-100"
    >
      <Container className="text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Text
          color="#41a0b3"
          size="3rem"
          style={{
            fontWeight: "800",
            backgroundColor: "#d7e8eb",
          }}
        >
          Waijiao Connect
        </Text>
        <Text
          size="1.5rem"
          className="my-3"
          style={{ fontWeight: "800", backgroundColor: "#d7e8eb" }}
        >
          Create your teacher profile, share school reviews and get help from
          other teachers
        </Text>

        <Row className="py-3 gap-2 justify-content-center align-items-center min-vw-100">
          <Col lg={2} md={3} sm={9} xs={12}>
            <PlainLink className="d-grid" to="/register">
              <PrimaryButton fontSize="1.5rem">Sign Up</PrimaryButton>
            </PlainLink>
          </Col>
          <Col lg={2} md={3} sm={9} xs={12}>
            <PlainLink className="d-grid" to="/login">
              <PrimaryOutlineButton fontSize="1.5rem">
                Login
              </PrimaryOutlineButton>
            </PlainLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
