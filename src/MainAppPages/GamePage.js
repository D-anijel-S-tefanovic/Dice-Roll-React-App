import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarComponent from "../GamePageComponents/NavbarComponent.js";
import BadgeComponent from "../GamePageComponents/BadgeComponent.js";
import ButtonOverlayComponent from "../GamePageComponents/ButtonOverlayComponent.js";
import ButtonComponent from "../GamePageComponents/ButtonComponent.js";
import OffcanvasComponent from "../GamePageComponents/OffcanvasComponent.js";
import ModalComponent from "../GamePageComponents/ModalComponent.js";
import Confetti from "react-confetti";
import { useHistory, useLocation } from "react-router-dom";
import "./PagesStyles.css";

export default function GamePage(props) {
  let history = useHistory();

  let location = useLocation();

  if (location.pathname === "/board") {
    history.block();
  }

  return (
    <React.Fragment>
      <Confetti
        width={props.width}
        height={props.height}
        opacity={props.showWinEffect}
      />

      <Container className="fade-in-effect" fluid>
        <Row className="mt-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="d-flex justify-content-center"
          >
            <NavbarComponent userName={props.userName} />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2">
            <BadgeComponent
              textValue="Dice Number"
              numberValue={props.diceNum}
            />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className="d-flex justify-content-center p-2"
          >
            <ButtonOverlayComponent
              controlAction={props.handleDiceIncrement}
              buttonSign="+"
              invokePopUp={props.maxLimitDice}
              limitText="Maximum Dice Number"
              limitNum="10"
            />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className="d-flex justify-content-center p-2"
          >
            <ButtonOverlayComponent
              controlAction={props.handleDiceDecrement}
              buttonSign="-"
              invokePopUp={props.minLimitDice}
              limitText="Minimum Dice Number"
              limitNum="1"
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2">
            <BadgeComponent
              textValue="Side Number"
              numberValue={props.sideNum}
            />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className="d-flex justify-content-center p-2"
          >
            <ButtonOverlayComponent
              controlAction={props.handleSideIncrement}
              buttonSign="+"
              invokePopUp={props.maxLimitSide}
              limitText="Maximum Side Number"
              limitNum="20"
            />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className="d-flex justify-content-center p-2"
          >
            <ButtonOverlayComponent
              controlAction={props.handleSideDecrement}
              buttonSign="-"
              invokePopUp={props.minLimitSide}
              limitText="Minimum Side Number"
              limitNum="6"
            />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-2">
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-4">
            <ButtonComponent handleRoll={props.handleRoll} />
          </Col>
        </Row>

        <div
          id="offcanvasBottom"
          class="offcanvas offcanvas-bottom h-50 bg-primary"
          data-bs-scroll="true"
          tabindex="-1"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header" className="text-center">
            <h3 class="offcanvas-title text-white">Dice Roll Board</h3>

            <button
              id="buttonClose"
              type="button"
              data-bs-dismiss="offcanvas"
              class="d-none"
            ></button>
          </div>

          <div class="offcanvas-body small">
            <Row>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="pb-4 text-center"
              >
                <OffcanvasComponent
                  userProfile={props.userName}
                  totalUserSum={props.totalPlayerSum}
                  dataUserDice={props.dicePlayerList}
                />
              </Col>

              <Col
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className="pb-4 text-center"
              >
                <OffcanvasComponent
                  userProfile="Computer"
                  totalUserSum={props.totalComputerSum}
                  dataUserDice={props.diceComputerList}
                />
              </Col>
            </Row>
          </div>
        </div>

        <ModalComponent
          showModal={props.showModal}
          showSessionWin={props.showSessionWin}
          showRoundCount={props.showRoundCount}
          userName={props.userName}
          showPlayerWins={props.showPlayerWins}
          showCompWins={props.showCompWins}
          showDraws={props.showDraws}
          continueInactiveButton={props.continueInactiveButton}
          continueActiveButton={props.continueActiveButton}
          continueSession={props.continueSession}
          restartInactiveButton={props.restartInactiveButton}
          restartActiveButton={props.restartActiveButton}
          restartSession={props.restartSession}
        />
      </Container>
    </React.Fragment>
  );
}
