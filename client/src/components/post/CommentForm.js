import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

import { Button, Form, Container, Row, Col, Image } from "react-bootstrap";

import { Text } from "../../utils/styledComponents";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="p-3">
        <Container
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#D7E8EB",
            border: "0.15rem solid #41a0b3",
          }}
        >
          <Text color="#41a0b3" size="1.5rem">
            Say something...
          </Text>
        </Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId, { text });
            setText("");
          }}
        >
          <Form.Group className="mb-3">
            <Form.Control
              style={{
                border: "0.15rem solid #41a0b3",
                borderTop: "0rem",
              }}
              as="textarea"
              placeholder="Create a post"
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Container className="p-2 d-grid">
            <Button type="submit" size="lg" variant="success">
              Submit
            </Button>
          </Container>
        </Form>
      </div>
    </>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
