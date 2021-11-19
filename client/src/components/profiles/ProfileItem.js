import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProfileImage from "../layout/ProfileImage";
import { ProfileItemCard } from "../layout/Card";

import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

const StyledButton = styled(Button)`
  border: 2px solid #41a0b3;
  color: #41a0b3;
`;

const ProfileItem = ({
  profile: {
    user: { _id, name },
    avatar,
    status,
    school,
    location,
    bio,
    languages,
  },
}) => {
  return (
    <>
      <ProfileItemCard
        avatar={avatar}
        name={name}
        bio={bio}
        status={status}
        school={school}
        location={location}
        link={`/profile/${_id}`}
      />
    </>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
