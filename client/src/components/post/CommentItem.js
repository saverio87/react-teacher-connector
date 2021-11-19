import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { removeComment } from "../../actions/post";

import ProfileImage from "../layout/ProfileImage";
import { DangerButton, StyledLink, Text } from "../../utils/styledComponents";

import { Card, Container, Row, Col, Image } from "react-bootstrap";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  removeComment,
}) => (
  <>
    <Card
      style={{
        margin: "1rem",
        border: "2px #41A0B3 solid",
      }}
    >
      <Card.Header
        className=""
        style={{
          backgroundColor: "#D7E8EB",
        }}
      >
        <Container>
          <Row>
            <Col className="d-none d-md-block" sm={2} lg={1} xl={1}>
              <ProfileImage margin="0rem" size={50} name={name} />
              {"   "}
            </Col>
            <Col
              sm={10}
              lg={11}
              xl={11}
              className="d-flex flex-column justify-content-center"
            >
              <StyledLink color="#41a0b3" weight="600" to={`/profile/${user}`}>
                <Text line="1" size="1.5rem">
                  {name}
                </Text>
              </StyledLink>
              <Text line="1" size="1rem" weight="400" color="#41a0b3">
                EAL teacher
              </Text>
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body className="px-3">
        <Card.Text>
          <Text size="1.2rem" weight="400">
            {text}
          </Text>
        </Card.Text>

        <Card.Text className="d-flex justify-content-end">
          <Text size="1.2rem">{formatDate(date)}</Text>
        </Card.Text>
      </Card.Body>
      {!auth.loading && user === auth.user._id && (
        <Card.Footer
          className=""
          style={{
            backgroundColor: "#D7E8EB",
          }}
        >
          <Card.Text className="d-flex justify-content-end">
            <DangerButton onClick={() => removeComment(postId, _id)}>
              <i class="fas fa-trash-alt" /> Delete
            </DangerButton>
          </Card.Text>
        </Card.Footer>
      )}
    </Card>
    {/* <div className="post bg-light-primary p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">Posted on {formatDate(date)}</p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => removeComment(postId, _id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  </div> */}
  </>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
