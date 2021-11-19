import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    languages,
    user: { name },
  },
}) => {
  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <>
          <h2 class="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
          <div class="line"></div>
        </>
      )}

      {languages && (
        <>
          <h2 class="text-primary">Languages</h2>
          <div class="skills">
            {console.log(languages)}
            {languages.map((value, index) => (
              <div key={index} class="p-1">
                <i class="fas fa-check"></i> {value}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
