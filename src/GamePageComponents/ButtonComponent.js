/** @jsxRuntime classic **/
/** @jsx jsx **/

import Button from "react-bootstrap/Button";
import Background from "../Pictures/BackgroundPicture.jpg";
import { jsx, css } from "@emotion/react";

const buttonStyle = css({
  width: "-webkit-fill-available",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export default function ButtonComponent(props) {
  return (
    <Button
      id="button-element"
      type="button"
      size="lg"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom"
      onClick={props.handleRoll}
      css={buttonStyle}
    >
      <div className="pt-2 pb-2 display-3 text-primary">Roll</div>
    </Button>
  );
}
