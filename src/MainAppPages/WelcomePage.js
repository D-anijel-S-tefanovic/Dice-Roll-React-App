import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageComponent from "../WelcomePageComponents/ImageComponent.js";
import PictureMaleLeft from "../Pictures/PictureMaleLeft.png";
import PictureMaleRight from "../Pictures/PictureMaleRight.png";
import PictureFemaleLeft from "../Pictures/PictureFemaleLeft.png";
import PictureFemaleRight from "../Pictures/PictureFemaleRight.png";
import ButtonComponent from "../WelcomePageComponents/ButtonComponent.js";
import InputComponent from "../WelcomePageComponents/InputComponent.js";
import ProfilePictureLeft from "../WelcomePageComponents/ProfilePictureLeft.js";
import ProfilePictureRight from "../WelcomePageComponents/ProfilePictureRight.js";
import ModalComponent from "../WelcomePageComponents/ModalComponent.js";
import LinkComponent from "../WelcomePageComponents/LinkComponent.js";
import "./PagesStyles.css";

export default function WelcomePage(props) {
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        <ImageComponent />
      </Row>

      <Row className="d-flex justify-content-center mt-2 h1 text-white">
        Dice Roll
      </Row>

      <Row className="mt-2">
        <Col
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className="d-flex justify-content-center"
        >
          <ButtonComponent
            controlAction={props.handleInput}
            buttonText="Let's Start"
            inactiveButton={props.inactiveButton}
            activeButton={props.activeButton}
          />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mt-5">
        {props.showInput === true ? (
          <Col xs={10} sm={4} md={4} lg={4} xl={4} className="fade-in-effect">
            <InputComponent
              handleInputFirstChoice={props.handleInputFirstChoice}
              handleInputSecondChoice={props.handleInputSecondChoice}
              genderValue={props.genderValue}
              inactiveButton={props.inactiveButton}
              activeButton={props.activeButton}
            />
          </Col>
        ) : null}
      </Row>

      <React.Fragment>
        {props.genderValue === "Male" || props.genderValue === "Female" ? (
          <Row className="d-flex justify-content-center mt-5 h3 text-white fade-in-effect">
            Choose Your Avatar
          </Row>
        ) : null}

        <Row>
          <Col
            xs={10}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="d-inline-flex justify-content-center"
          >
            {props.showInput === true && props.genderValue === "Male" ? (
              <ProfilePictureLeft
                pictureLeftId="PictureLeft"
                pictureLeftFor="PictureLeft"
                handleLeftCheck={props.handleLeftCheck}
                pictureLeftCheck={props.pictureLeftCheck}
                pictureLeft={PictureMaleLeft}
              />
            ) : null}

            {props.showInput === true && props.genderValue === "Female" ? (
              <ProfilePictureLeft
                pictureLeftId="PictureLeft"
                pictureLeftFor="PictureLeft"
                handleLeftCheck={props.handleLeftCheck}
                pictureLeftCheck={props.pictureLeftCheck}
                pictureLeft={PictureFemaleLeft}
              />
            ) : null}

            {props.showInput === true && props.genderValue === "Male" ? (
              <ProfilePictureRight
                pictureRightId="PictureRight"
                pictureRightFor="PictureRight"
                handleRightCheck={props.handleRightCheck}
                pictureRightCheck={props.pictureRightCheck}
                pictureRight={PictureMaleRight}
              />
            ) : null}

            {props.showInput === true && props.genderValue === "Female" ? (
              <ProfilePictureRight
                pictureRightId="PictureRight"
                pictureRightFor="PictureRight"
                handleRightCheck={props.handleRightCheck}
                pictureRightCheck={props.pictureRightCheck}
                pictureRight={PictureFemaleRight}
              />
            ) : null}
          </Col>
        </Row>
      </React.Fragment>

      <ModalComponent
        showModal={props.showModal}
        handleRoundsNumberOptionOne={props.handleRoundsNumberOptionOne}
        handleRoundsNumberOptionTwo={props.handleRoundsNumberOptionTwo}
        handleRoundsNumberOptionThree={props.handleRoundsNumberOptionThree}
        roundsNumberCorrect={props.roundsNumberCorrect}
        roundsNumberIncorrect={props.roundsNumberIncorrect}
        roundsNumber={props.roundsNumber}
        handleUserName={props.handleUserName}
        userNameCorrect={props.userNameCorrect}
        userNameIncorrect={props.userNameIncorrect}
        userName={props.userName}
        handleCloseButton={props.handleCloseButton}
        handleSaveButton={props.handleSaveButton}
      />

      {props.showButtons === true ? (
        <Row className="mt-2 fade-in-effect">
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className="d-inline-flex justify-content-end"
          >
            <ButtonComponent
              controlAction={() => window.location.reload()}
              buttonText="Reset"
              inactiveButton={false}
              activeButton={true}
            />
          </Col>

          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className="d-inline-flex justify-content-start"
          >
            <LinkComponent />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
}
