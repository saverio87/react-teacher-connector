import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import avatarList from "../../utils/avatarList";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

const ChooseAvatar = ({ changeAvatar, setToggleModal, toggleModal }) => {
  const onClick = (e) => {
    changeAvatar(e);
    setToggleModal();
  };
  const avatars = avatarList.map((avatar) => (
    <div class="" onClick={() => onClick(avatar)}>
      <img src={avatar} alt="" />
    </div>
  ));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal size="xl" show={toggleModal} onHide={setToggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Choose avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {avatarList.map((avatar) => (
                <Col sm={12} md={6} lg={4} onClick={() => onClick(avatar)}>
                  <img src={avatar} alt="" />
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setToggleModal}></Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  // return (
  //   <>
  //     <div class="avatar-section">
  //       <div class="arrow-left">
  //         <h1>
  //           <i class="fas fa-chevron-left"></i>
  //         </h1>
  //       </div>

  //       <div class="avatar-grid">{avatars}</div>

  //       <div class="arrow-right">
  //         <h1>
  //           <i class="fas fa-chevron-right"></i>
  //         </h1>
  //       </div>
  //     </div>
  //   </>
  // );
};

ChooseAvatar.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(ChooseAvatar);
