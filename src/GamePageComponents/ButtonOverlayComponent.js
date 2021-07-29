/** @jsxRuntime classic **/
/** @jsx jsx **/

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { jsx, css } from "@emotion/react";

const popoverTitleStyle = css({
  backgroundColor: "#1266F1",
  color: "white",
  border: "none",
});

const popoverContentStyle = css({
  backgroundColor: "#E6E62E",
  color: "white",
  fontWeight: "bold",
  border: "none",
});

const buttonStyle = css({
  width: "-webkit-fill-available",
});

export default function ButtonOverlayComponent(props) {
  return (
    <OverlayTrigger
      trigger={props.invokePopUp}
      rootClose={true}
      rootCloseEvent="click"
      key="top"
      placement="top"
      overlay={
        <Popover id="popover-positioned-top">
          <Popover.Title as="h3" css={popoverTitleStyle}>
            Limit Reached
          </Popover.Title>

          <Popover.Content css={popoverContentStyle}>
            {props.limitText} is {props.limitNum}
          </Popover.Content>
        </Popover>
      }
    >
      <Button onClick={props.controlAction} css={buttonStyle}>
        <div className="display-1 text-white">{props.buttonSign}</div>
      </Button>
    </OverlayTrigger>
  );
}
