import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => {
  return (
    <div>
      <h3>{school}</h3>
      <p>
        {formatDate(from)} to {to ? formatDate(to) : "Now"}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field of study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
