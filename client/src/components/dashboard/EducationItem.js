import React from "react";

import {
  DangerButton,
  PrimaryButton,
  StyledLink,
} from "../../utils/styledComponents";

import formatDate from "../../utils/formatDate";

import { Text, PrimaryText } from "../../utils/styledComponents";

import {
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

export const EducationItem = ({ edu, deleteEducation }) => {
  return (
    <Card
      style={{
        margin: "1rem 0rem 1rem 0rem",
        border: "2px #41A0B3 solid",
      }}
    >
      <Card.Body className="px-3">
        <Container>
          <Row>
            <Col className="d-grid">
              <PrimaryText size="1.5rem" line="1">
                {edu.degree} in {edu.fieldofstudy}
              </PrimaryText>
              <Text color="black" size="1.2rem">
                {edu.school}
              </Text>
            </Col>
            <Col className="d-flex flex-row justify-content-end">
              <Text size="1.2rem">
                {formatDate(edu.from)} to {edu.to ? formatDate(edu.to) : "Now"}
              </Text>
            </Col>
          </Row>
        </Container>
        <Card.Text>
          <Container>
            <Text size="1rem" line="1">
              {edu.description}
            </Text>
          </Container>
        </Card.Text>
      </Card.Body>

      <Card.Footer
        className=""
        style={{
          backgroundColor: "#D7E8EB",
        }}
      >
        <Card.Text className="d-flex justify-content-end">
          <StyledLink>
            <PrimaryButton>
              <i class="fas fa-edit" /> Update
            </PrimaryButton>
          </StyledLink>
          &nbsp;
          <DangerButton onClick={deleteEducation}>
            <i class="fas fa-trash-alt" /> Delete
          </DangerButton>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};
