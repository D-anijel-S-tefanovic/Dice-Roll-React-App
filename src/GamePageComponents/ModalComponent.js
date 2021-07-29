/** @jsxRuntime classic **/
/** @jsx jsx **/

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { jsx, css } from "@emotion/react";

const modalStyle = css({
  backgroundColor: "#E6E62E",
  border: "none",
});

export default function ModalComponent(props) {
  return (
    <Modal
      aria-labelledby="modal-element"
      backdrop={false}
      show={props.showModal}
    >
      <Modal.Header id="modal-header-element" css={modalStyle}>
        <Container fluid>
          <Row xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={8}
              xl={8}
              className="d-flex justify-content-start"
            >
              <Modal.Title id="modal-title-element-1" className="h5">
                <div className="d-inline text-white">Outcome:</div>{" "}
                <div className="d-inline text-primary">
                  {props.showSessionWin}
                </div>
              </Modal.Title>
            </Col>

            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              className="d-flex justify-content-end"
            >
              <Modal.Title id="modal-title-element-2" className="h5">
                <div className="d-inline text-white">Round:</div>{" "}
                <div className="d-inline text-primary">
                  {props.showRoundCount}
                </div>
              </Modal.Title>
            </Col>
          </Row>
        </Container>
      </Modal.Header>

      <Modal.Body id="modal-body-element" css={modalStyle}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="d-inline text-white">
              {props.userName} Rounds Won:
            </div>{" "}
            <div className="d-inline text-primary">{props.showPlayerWins}</div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="d-inline text-white">Computer Rounds Won:</div>{" "}
            <div className="d-inline text-primary">{props.showCompWins}</div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="d-inline text-white">Draw Rounds:</div>{" "}
            <div className="d-inline text-primary">{props.showDraws}</div>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer id="modal-footer-element" css={modalStyle}>
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              className="d-flex justify-content-center"
            >
              <Button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Home
              </Button>
            </Col>

            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              className="d-flex justify-content-center"
            >
              <Button
                data-bs-dismiss="offcanvas"
                disabled={props.restartInactiveButton}
                active={props.restartActiveButton}
                onClick={props.restartSession}
              >
                Restart
              </Button>
            </Col>

            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              className="d-flex justify-content-center"
            >
              <Button
                data-bs-dismiss="offcanvas"
                disabled={props.continueInactiveButton}
                active={props.continueActiveButton}
                onClick={props.continueSession}
              >
                Continue
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}
