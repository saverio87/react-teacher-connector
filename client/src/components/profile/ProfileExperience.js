import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";

const ProfileExperience = ({
  experience: { school, title, from, to, description },
}) => {
  return (
    <div>
      <h3>{school}</h3>
      <p>
        {formatDate(from)} to {to ? formatDate(to) : "now"}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
