/** @jsxRuntime classic **/
/** @jsx jsx **/

import Image from "react-bootstrap/Image";
import LogoPicture from "../Pictures/LogoPicture.png";
import { jsx, css } from "@emotion/react";

const logoStyle = css({
  width: "10rem",
  height: "10rem",
});

export default function ImageComponent(props) {
  return <Image src={LogoPicture} css={logoStyle} />;
}
