import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

import {
  DangerButton,
  Header,
  PlainLink,
  PrimaryButton,
  SecondaryButton,
  StyledLink,
} from "../../utils/styledComponents";

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
import { EducationItem } from "./EducationItem";

const Education = ({ deleteEducation, profile: { profile, loading } }) => {
  return (
    <>
      <Header>
        <Text color="#41a0b3" size="2rem">
          Education credentials
        </Text>
        <Text size="1.2rem">
          <i class="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
          that you have attended
        </Text>
      </Header>

      <PlainLink to="/add-education">
        <div className="d-grid py-3">
          <PrimaryButton size="lg" fontSize="2rem">
            Add education
          </PrimaryButton>
        </div>
      </PlainLink>

      {profile.education.map((edu) => (
        <EducationItem
          key={edu._id}
          edu={edu}
          deleteEducation={() => deleteEducation(edu._id)}
        />
      ))}

      <PlainLink to="/dashboard">
        <div className="d-grid py-3">
          <SecondaryButton fontSize="1.5rem">Go back</SecondaryButton>
        </div>
      </PlainLink>
    </>
  );
};

Education.propTypes = {
  profile: PropTypes.object.isRequired, // state
  deleteEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { deleteEducation })(Education);
