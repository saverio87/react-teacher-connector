import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

import { SuccessButton, Text } from "../../utils/styledComponents";

import { Form, Container } from "react-bootstrap";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <>
      <Container
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#D7E8EB",
          border: "1px solid #41a0b3",
        }}
      >
        <Text color="#41a0b3" size="1.5rem">
          Say something...
        </Text>
      </Container>
      <Form
        class="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Create a post"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Container className="p-2 d-grid">
          <SuccessButton fontSize="1.5rem" type="submit">
            Submit
          </SuccessButton>
        </Container>
      </Form>
    </>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
