import React from "react";
import { Link } from "react-router-dom";

import {
  PlainLink,
  PrimaryButton,
  PrimaryText,
} from "../../utils/styledComponents";

import { Button, Container, Row, Col } from "react-bootstrap";

const DashboardActions = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="p-2">
            <PlainLink to="/edit-profile">
              <div className="d-grid">
                <PrimaryButton size="lg" fontSize="1.5rem">
                  <i className="fas fa-user-circle" /> Edit profile
                </PrimaryButton>
              </div>
            </PlainLink>
          </Col>
          <Col xs={12} lg={6} className="p-2">
            <PlainLink to="/leave-review">
              <div className="d-grid">
                <PrimaryButton size="lg" fontSize="1.5rem">
                  <i class="fas fa-edit " /> Leave a review
                </PrimaryButton>
              </div>
            </PlainLink>
          </Col>

          <Col xs={12} lg={6} className="p-2">
            <PlainLink to="/my-experience">
              <div className="d-grid">
                <PrimaryButton size="lg" fontSize="1.5rem">
                  <i class="fab fa-black-tie" /> My experience
                </PrimaryButton>
              </div>
            </PlainLink>
          </Col>
          <Col xs={12} lg={6} className="p-2 d-grid">
            <PlainLink to="/my-education">
              <div className="d-grid">
                <PrimaryButton size="lg" fontSize="1.5rem">
                  <i class="fas fa-graduation-cap" /> My education
                </PrimaryButton>
              </div>
            </PlainLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardActions;
