import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import { ExperienceItem } from "./ExperienceItem";
import {
  Header,
  Text,
  PlainLink,
  PrimaryButton,
  SecondaryButton,
} from "../../utils/styledComponents";

const Experience = ({ profile: { profile, loading }, deleteExperience }) => {
  return (
    <>
      <Header>
        <Text color="#41a0b3" size="2rem">
          Experience credentials
        </Text>
        <Text size="1.2rem">
          <i class="fas fa-tie" /> Add any teaching experience that you have had
          in the past
        </Text>
      </Header>

      <PlainLink to="/add-experience">
        <div className="d-grid py-3">
          <PrimaryButton size="lg" fontSize="2rem">
            Add experience
          </PrimaryButton>
        </div>
      </PlainLink>

      {profile.experience.map((exp) => (
        <ExperienceItem
          key={exp._id}
          exp={exp}
          deleteExperience={() => deleteExperience(exp._id)}
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

Experience.propTypes = {
  profile: PropTypes.object.isRequired, // state
  deleteExperience: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { deleteExperience })(Experience);
