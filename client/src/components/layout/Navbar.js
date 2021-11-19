import React, { useState, useEffect } from "react";
import { Navbar as BoostrapNavbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { useMediaPredicate } from "react-media-hook";
import { StyledLink } from "../../utils/styledComponents";

const webTitle = styled(Nav.Link)`
  color: white;
  text-decoration: none;
`;

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  // const [toggleLinks, setToggleLinks] = useState(false);

  // const smallerThan700 = useMediaPredicate("(max-width: 700px)");

  // const onLogout = () => {
  //   logout();
  // };

  // // const onToggle = () => {
  //   smallerThan700
  //     ? setToggleLinks((toggleLinks) => !toggleLinks)
  //     : setToggleLinks(toggleLinks);
  // };

  // useEffect(() => {
  //   setToggleLinks(false);
  // }, []);

  const authLinks = (
    <>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/profiles">
          Teachers
        </StyledLink>
      </Nav.Link>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/posts">
          Bulletin board
        </StyledLink>
      </Nav.Link>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/reviews">
          Reviews
        </StyledLink>
      </Nav.Link>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/dashboard">
          <i className="fas fa-user"></i> <span>Dashboard</span>
        </StyledLink>
      </Nav.Link>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
        </StyledLink>
      </Nav.Link>
    </>
  );

  const guestLinks = (
    <>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/profiles">
          Teachers
        </StyledLink>
      </Nav.Link>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/register">
          Register
        </StyledLink>
      </Nav.Link>
      <Nav.Link>
        <StyledLink color="#41a0b3" size="1.2rem" to="/login">
          Login
        </StyledLink>
      </Nav.Link>
    </>
  );

  return (
    <>
      <BoostrapNavbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#D7E8EB" }}
      >
        <Container>
          <BoostrapNavbar.Brand href="#home">
            &nbsp;&nbsp;
            <webTitle>
              <StyledLink color="#41a0b3" weight="800" size="1.5rem" to="/">
                <i className="fas fa-chalkboard-teacher" />
                &nbsp; Waijiao Connect
              </StyledLink>
            </webTitle>
          </BoostrapNavbar.Brand>
          <BoostrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BoostrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav
              style={{ width: "100%" }}
              className="justify-content-end ml-auto gap-3"
            >
              {!loading && <> {isAuthenticated ? authLinks : guestLinks} </>}
            </Nav>
          </BoostrapNavbar.Collapse>
        </Container>
      </BoostrapNavbar>
    </>
  );
};

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
