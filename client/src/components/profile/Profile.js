import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import ProfileImage from "../layout/ProfileImage";
import styled from "styled-components";
import {
  Text,
  PrimaryText,
  PlainLink,
  SecondaryButton,
  EditButton,
} from "../../utils/styledComponents";

import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import ProfileAccordion from "./ProfileAccordion";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {!profile || loading ? (
        <Spinner />
      ) : (
        <>
          <PlainLink to="/profiles">
            <Container className="d-grid">
              <SecondaryButton fontSize="1.5rem">
                Back To Profiles
              </SecondaryButton>
            </Container>
          </PlainLink>

          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <PlainLink to="/edit-profile">
                <Container className="my-2 d-grid">
                  <EditButton fontSize="1.5rem">Edit profile</EditButton>
                </Container>
              </PlainLink>
            )}

          <Card
            style={{
              margin: "2rem 0rem 2rem 0rem",
              border: "2px #41A0B3 solid",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "#D7E8EB",
              }}
            >
              {" "}
              <div className="d-flex flex-column align-items-center">
                {profile.avatar ? (
                  <Image
                    style={{ border: "1px solid #41a0b3" }}
                    src={profile.avatar}
                    roundedCircle
                  />
                ) : (
                  <ProfileImage size={120} name={profile.user.name} />
                )}

                <PrimaryText size="3rem" weight="600">
                  {profile.user.name}
                </PrimaryText>
                <PrimaryText size="1.8rem" weight="300">
                  {profile.status} at {profile.school}
                </PrimaryText>
                <PrimaryText size="1.5rem" weight="400">
                  {profile.location}
                </PrimaryText>

                <Container className="py-3 d-flex gap-5 justify-content-center">
                  {/* Add social links */}

                  <PrimaryText>
                    <i class="fas fa-globe fa-2x" />
                  </PrimaryText>
                  <PrimaryText>
                    <i class="fab fa-twitter fa-2x" />
                  </PrimaryText>
                  <PrimaryText>
                    <i class="fab fa-facebook fa-2x" />
                  </PrimaryText>
                  <PrimaryText>
                    <i class="fab fa-linkedin fa-2x" />
                  </PrimaryText>
                  <PrimaryText>
                    <i class="fab fa-instagram fa-2x" />
                  </PrimaryText>
                </Container>
              </div>
            </Card.Header>
            <Card.Body>
              {/* <Card.Text className="d-flex justify-content-center"> */}
              <ProfileAccordion profile={profile} />
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

// We need auth because we want to see if the user is logged in
// and if they are, and the profile that they are viewing matches
// we want them to be able to edit their profile

export default connect(mapStateToProps, { getProfileById })(Profile);
