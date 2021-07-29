/** @jsxRuntime classic **/
/** @jsx jsx **/

import React from "react";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Dice1 from "../Pictures/Dice1.png";
import Dice2 from "../Pictures/Dice2.png";
import Dice3 from "../Pictures/Dice3.png";
import Dice4 from "../Pictures/Dice4.png";
import Dice5 from "../Pictures/Dice5.png";
import Dice6 from "../Pictures/Dice6.png";
import Dice7 from "../Pictures/Dice7.png";
import Dice8 from "../Pictures/Dice8.png";
import Dice9 from "../Pictures/Dice9.png";
import Dice10 from "../Pictures/Dice10.png";
import Dice11 from "../Pictures/Dice11.png";
import Dice12 from "../Pictures/Dice12.png";
import Dice13 from "../Pictures/Dice13.png";
import Dice14 from "../Pictures/Dice14.png";
import Dice15 from "../Pictures/Dice15.png";
import Dice16 from "../Pictures/Dice16.png";
import Dice17 from "../Pictures/Dice17.png";
import Dice18 from "../Pictures/Dice18.png";
import Dice19 from "../Pictures/Dice19.png";
import Dice20 from "../Pictures/Dice20.png";
import "./OffcanvasStyles.css";
import uuid from "react-uuid";
import { jsx, css } from "@emotion/react";

const scoreIndicatorStyle = css({
  backgroundColor: "#E6E62E",
  marginBottom: "2%",
  padding: "2%",
});

const diceContainerStyle = css({
  width: "15%",
  paddingBottom: "2%",
});

const diceImageStyle = css({
  borderRadius: "20%",
});

export default function OffcanvasComponent(props) {
  return (
    <React.Fragment>
      <div css={scoreIndicatorStyle}>
        <div className="d-inline-flex h5 text-white">
          {props.userProfile} - Score
        </div>{" "}
        <Badge className="bg-primary">
          <div className="h5">{props.totalUserSum}</div>
        </Badge>
      </div>

      <Row className="d-flex justify-content-center">
        {props.dataUserDice.map((number, index) =>
          number === 1 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice1} css={diceImageStyle} fluid />
            </div>
          ) : number === 2 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice2} css={diceImageStyle} fluid />
            </div>
          ) : number === 3 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice3} css={diceImageStyle} fluid />
            </div>
          ) : number === 4 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice4} css={diceImageStyle} fluid />
            </div>
          ) : number === 5 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice5} css={diceImageStyle} fluid />
            </div>
          ) : number === 6 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice6} css={diceImageStyle} fluid />
            </div>
          ) : number === 7 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice7} css={diceImageStyle} fluid />
            </div>
          ) : number === 8 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice8} css={diceImageStyle} fluid />
            </div>
          ) : number === 9 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice9} css={diceImageStyle} fluid />
            </div>
          ) : number === 10 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice10} css={diceImageStyle} fluid />
            </div>
          ) : number === 11 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice11} css={diceImageStyle} fluid />
            </div>
          ) : number === 12 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice12} css={diceImageStyle} fluid />
            </div>
          ) : number === 13 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice13} css={diceImageStyle} fluid />
            </div>
          ) : number === 14 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice14} css={diceImageStyle} fluid />
            </div>
          ) : number === 15 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice15} css={diceImageStyle} fluid />
            </div>
          ) : number === 16 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice16} css={diceImageStyle} fluid />
            </div>
          ) : number === 17 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice17} css={diceImageStyle} fluid />
            </div>
          ) : number === 18 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice18} css={diceImageStyle} fluid />
            </div>
          ) : number === 19 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice19} css={diceImageStyle} fluid />
            </div>
          ) : number === 20 ? (
            <div
              css={diceContainerStyle}
              className="rotate-scale-dice"
              key={uuid()}
            >
              <Image src={Dice20} css={diceImageStyle} fluid />
            </div>
          ) : null
        )}
      </Row>
    </React.Fragment>
  );
}
