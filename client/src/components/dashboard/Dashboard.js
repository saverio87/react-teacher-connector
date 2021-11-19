import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";

import { connect } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import { Header, Text } from "../../utils/styledComponents";

import { Button, Container, Row, Col } from "react-bootstrap";
import ProfileImage from "../layout/ProfileImage";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <Header>
        <Text color="#41a0b3" size="2rem">
          Dashboard
        </Text>
      </Header>

      {profile !== null ? (
        <>
          {" "}
          <Container className="p-3 d-flex flex-column  align-items-center text-center">
            <ProfileImage
              imageSize="8rem"
              name={user && user.name}
              image={profile && profile.avatar}
              size="2rem"
            />
            <Text size="1.2rem">Welcome, {user && user.name}</Text>
          </Container>
          <DashboardActions />
          {/*<Experience experience={profile.experience} />
          <Education education={profile.education} />*/}
          <Container className="py-5">
            <Row>
              <Col className="d-grid">
                <Button
                  size="lg"
                  onClick={() => deleteAccount()}
                  variant="danger"
                >
                  <i class="fas fa-user-minus"></i> Delete My Account
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container className="d-grid text-center">
            <Text size="1.2rem">
              You have not yet created a profile, please go ahead and add some
              info!
            </Text>
            <Link to="./create-profile">
              <Button variant="outline-secondary">Create Profile</Button>
            </Link>
          </Container>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired, // action
  deleteAccount: PropTypes.func.isRequired, // action
  auth: PropTypes.object.isRequired, // state
  profile: PropTypes.object.isRequired, // state
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
