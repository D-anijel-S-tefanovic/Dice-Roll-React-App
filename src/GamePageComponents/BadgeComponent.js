/** @jsxRuntime classic **/
/** @jsx jsx **/

import React from "react";
import Badge from "react-bootstrap/Badge";
import { jsx, css } from "@emotion/react";

const badgeStyle = css({
  backgroundColor: "#E6E62E",
  padding: "5%",
  textAlign: "center",
});

export default function BadgeComponent(props) {
  return (
    <React.Fragment>
      <div css={badgeStyle}>
        <div className="d-inline-flex h1 text-primary">{props.textValue}</div>{" "}
        <Badge className="bg-primary">
          <div className="h1 text-white">{props.numberValue}</div>
        </Badge>
      </div>
    </React.Fragment>
  );
}
