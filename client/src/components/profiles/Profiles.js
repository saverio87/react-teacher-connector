import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";
import { Container, Row, Col } from "react-bootstrap";
import { Header, Text } from "../../utils/styledComponents";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header>
            <Text color="#41a0b3" size="2rem">
              Teachers
            </Text>
            <Text size="1.2rem">
              <i className="fas fa-chalkboard-teacher"></i> Browse and connect
              with other teachers
            </Text>
          </Header>

          <Container fluid>
            <Row>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <Col xl={4} xs={12} lg={4} md={6} sm={12}>
                    <ProfileItem key={profile._id} profile={profile} />
                  </Col>
                ))
              ) : (
                <Spinner />
              )}
            </Row>
          </Container>
        </>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
