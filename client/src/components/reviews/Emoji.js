import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import emojiList from "../../utils/emojiList";

import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import ProfileImage from "../layout/ProfileImage";

// const Emoji = ({ formData, emoji, onChangeEmoji }) => {
//   const [checkEmoji, setCheckEmoji] = useState("");

//   return (
//     <>
//       <div className="emoticon" onClick={onClick}>
//         <img src={emoji} alt="" />
//         <div class={`check-mark ${checkEmoji}`}>
//           <i class="fas fa-check-circle"></i>
//         </div>
//       </div>
//     </>
//   );
// };

const Emoji = ({ formData, setFormData }) => {
  const [show, setShow] = useState(false);

  const [emoji, setEmoji] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeEmoji = (emoji) => {
    setEmoji(emoji);

    setFormData({
      ...formData,
      emoticon: emoji,
    });

    handleClose();
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center py-3">
        <Col xl={2} lg={3} md={3} sm={4} xs={4}>
          <img
            onClick={handleShow}
            style={{ maxWidth: "90%" }}
            src={emoji ? emoji : emojiList[0]}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">Click on the emoticon to change it</Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose an emoticon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {emojiList.map((emoticon) => (
                <>
                  <Col
                    onClick={() => onChangeEmoji(emoticon)}
                    className="py-1"
                    xs={6}
                    lg={4}
                    xl={3}
                  >
                    <img style={{ maxWidth: "90%" }} src={emoticon} />
                  </Col>
                  {/* <Emoji
                formData={formData}
                emoji={emoticon}
                onChangeEmoji={onChangeEmoji}
              /> */}
                </>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Emoji;
