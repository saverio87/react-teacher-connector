import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import {
  Header,
  Text,
  PrimaryText,
  SecondaryButton,
  PlainLink,
  PrimaryButton,
} from "../../utils/styledComponents";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    school: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { title, school, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Container>
        <Card className="my-5 p-4 d-flex align-items-center">
          <PrimaryText size="2rem" weight="900">
            Add An Experience
          </PrimaryText>
          Add any teaching experience that you have had in the past
          <small>* = required field</small>
          <Form
            style={{ minWidth: "80%" }}
            onSubmit={(e) => {
              e.preventDefault();
              addExperience(formData, history);
            }}
          >
            <Form.Group className="mb-3" controlId="school">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="* Job Title"
                name="title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="degree">
              <Form.Label>School / Company</Form.Label>
              <Form.Control
                value={school}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="* School"
                name="school"
                required
              />
            </Form.Group>

            <Form.Group controlId="fieldofstudy">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="Location"
                name="location"
              />
            </Form.Group>

            <Row className="mb-3 py-2">
              <Form.Group as={Col} controlId="from">
                <Form.Label>From Date</Form.Label>
                <Form.Control
                  value={from}
                  onChange={(e) => onChange(e)}
                  type="date"
                  name="from"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="to">
                <Form.Label>To Date</Form.Label>
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
                label="Current job"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => onChange(e)}
                name="description"
                rows={5}
                placeholder="Job Description"
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
