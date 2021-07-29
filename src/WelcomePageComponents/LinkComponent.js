import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LinkComponent(props) {
  return (
    <Link to="/board">
      <Button id="button-element" type="button" size="lg">
        Proceed
      </Button>
    </Link>
  );
}
