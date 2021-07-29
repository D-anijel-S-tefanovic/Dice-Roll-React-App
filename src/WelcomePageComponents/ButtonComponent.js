import Button from "react-bootstrap/Button";

export default function ButtonComponent(props) {
  return (
    <Button
      id="button-element"
      type="button"
      size="lg"
      onClick={props.controlAction}
      disabled={props.inactiveButton}
      active={props.activeButton}
    >
      {props.buttonText}
    </Button>
  );
}
