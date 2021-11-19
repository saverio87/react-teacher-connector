import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import {
  Text,
  PrimaryText,
  SecondaryButton,
  PlainLink,
  PrimaryButton,
} from "../../utils/styledComponents";

import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Container>
        <Card className="my-5 p-4 d-flex align-items-center">
          <PrimaryText size="2rem" weight="900">
            Add Your Education
          </PrimaryText>
          Add any school, course or bootcamp that you have attended / passed
          <small>* = required field</small>
          <Form
            style={{ minWidth: "80%" }}
            onSubmit={(e) => {
              e.preventDefault();
              addEducation(formData, history);
            }}
          >
            <Form.Group className="mb-3" controlId="school">
              <Form.Label>School</Form.Label>
              <Form.Control
                value={school}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="* School or bootcamp"
                name="school"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="degree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                value={degree}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="* Degree or Certificate"
                name="degree"
                required
              />
            </Form.Group>

            <Form.Group controlId="fieldofstudy">
              <Form.Label>Field of study</Form.Label>
              <Form.Control
                value={fieldofstudy}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="Field of study"
                name="fieldofstudy"
              />
            </Form.Group>

            <Row className="mb-3 py-2">
              <Form.Group as={Col} controlId="from">
                <Form.Label>From</Form.Label>
                <Form.Control
                  value={from}
                  onChange={(e) => onChange(e)}
                  type="date"
                  name="from"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="to">
                <Form.Label>To</Form.Label>
                <Form.Control
                  value={to}
                  onChange={(e) => onChange(e)}
                  type="date"
                  name="to"
                  disabled={toDateDisabled ? "disabled" : ""}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="current">
              <Form.Check
                value={current}
                checked={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled((toDateDisabled) => !toDateDisabled);
                }}
                type="checkbox"
                name="current"
                label="Current school"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Program / Course description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => onChange(e)}
                name="description"
                rows={5}
                placeholder="Program / Course description"
              />
            </Form.Group>

            <div className="d-grid">
              <PrimaryButton type="submit">Submit </PrimaryButton>
            </div>
          </Form>
        </Card>

        <PlainLink to="/dashboard">
          <div className="d-grid py-3">
            <SecondaryButton fontSize="1.5rem">Go back</SecondaryButton>
          </div>
        </PlainLink>
      </Container>
    </>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
