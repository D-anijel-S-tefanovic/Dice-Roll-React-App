/** @jsxRuntime classic **/
/** @jsx jsx **/

import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import PictureMaleLeft from "../Pictures/PictureMaleLeft.png";
import PictureMaleRight from "../Pictures/PictureMaleRight.png";
import PictureFemaleLeft from "../Pictures/PictureFemaleLeft.png";
import PictureFemaleRight from "../Pictures/PictureFemaleRight.png";
import { useSelector } from "react-redux";
import { jsx, css } from "@emotion/react";

const modalStyle = css({
  backgroundColor: "#E6E62E",
  border: "none",
});

export default function ModalComponent(props) {
  const genderValue = useSelector((state) => state.diceRoll.genderValue);

  const pictureLeftCheck = useSelector(
    (state) => state.diceRoll.pictureLeftCheck
  );

  const pictureRightCheck = useSelector(
    (state) => state.diceRoll.pictureRightCheck
  );

  return (
    <Modal aria-labelledby="modal-element" show={props.showModal}>
      <Modal.Header id="modal-header-element" css={modalStyle}>
        <Modal.Title id="modal-title-element" className="text-white">
          Almost there :)
        </Modal.Title>
      </Modal.Header>

      <Modal.Body id="modal-body-element" css={modalStyle}>
        <InputGroup size="lg" hasValidation>
          <DropdownButton
            as={InputGroup.Prepend}
            id="dropdown-button-element"
            size="lg"
            title="Rounds"
          >
            <Dropdown.Item onClick={props.handleRoundsNumberOptionOne}>
              2
            </Dropdown.Item>
            <Dropdown.Item onClick={props.handleRoundsNumberOptionTwo}>
              4
            </Dropdown.Item>
            <Dropdown.Item onClick={props.handleRoundsNumberOptionThree}>
              8
            </Dropdown.Item>
          </DropdownButton>

          <Form.Control
            as="input"
            id="form-input-element-1"
            value={props.roundsNumber}
            required
            isInvalid={props.roundsNumberIncorrect}
            isValid={props.roundsNumberCorrect}
            className="text-primary"
            readOnly
          />

          <Form.Control.Feedback type="invalid">
            Please choose number of rounds.
          </Form.Control.Feedback>

          <Form.Control.Feedback type="valid">
            Looks good.
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup className="mt-3" size="lg" hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text>
              {" "}
              <Image
                src={
                  genderValue === "Male" && pictureLeftCheck
                    ? PictureMaleLeft
                    : genderValue === "Male" && pictureRightCheck
                    ? PictureMaleRight
                    : genderValue === "Female" && pictureLeftCheck
                    ? PictureFemaleLeft
                    : genderValue === "Female" && pictureRightCheck
                    ? PictureFemaleRight
                    : null
                }
                width={35}
                height={35}
              />
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            as="input"
            id="form-input-element-2"
            placeholder="Enter Your Username"
            onChange={props.handleUserName}
            value={props.userName}
            required
            isInvalid={props.userNameIncorrect}
            isValid={props.userNameCorrect}
            className="text-primary"
          />

          <Form.Control.Feedback type="invalid">
            Please enter username.
          </Form.Control.Feedback>

          <Form.Control.Feedback type="valid">
            Looks good.
          </Form.Control.Feedback>
        </InputGroup>
      </Modal.Body>

      <Modal.Footer id="modal-footer-element" css={modalStyle}>
        <Button
          id="button-element-1"
          type="button"
          size="lg"
          onClick={props.handleCloseButton}
        >
          Undo Changes
        </Button>

        <Button
          id="button-element-2"
          type="button"
          size="lg"
          onClick={props.handleSaveButton}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
