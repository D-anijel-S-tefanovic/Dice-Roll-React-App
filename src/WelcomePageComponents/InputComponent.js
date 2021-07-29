import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";

export default function InputComponent(props) {
  return (
    <InputGroup size="lg">
      <DropdownButton
        as={InputGroup.Prepend}
        id="dropdown-button-element"
        title="Gender"
        size="lg"
        disabled={props.inactiveButton}
        active={props.activeButton}
      >
        <Dropdown.Item onClick={props.handleInputFirstChoice}>
          Male
        </Dropdown.Item>
        <Dropdown.Item onClick={props.handleInputSecondChoice}>
          Female
        </Dropdown.Item>
      </DropdownButton>

      <Form.Control
        as="input"
        id="form-input-element"
        value={props.genderValue}
        className="text-primary"
        readOnly
      />
    </InputGroup>
  );
}
