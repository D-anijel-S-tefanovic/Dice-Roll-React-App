import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomePage from "./MainAppPages/WelcomePage.js";
import GamePage from "./MainAppPages/GamePage.js";
import { useEffect } from "react";
import { useWindowSize } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowInput,
  setGenderValue,
  setPictureLeftCheck,
  setPictureRightCheck,
  setShowModal,
  setRoundsNumber,
  setUserName,
  setUserNameCorrect,
  setUserNameIncorrect,
  setRoundsNumberCorrect,
  setRoundsNumberIncorrect,
  setInactiveButton,
  setActiveButton,
  setShowButtons,
  setDiceIncrement,
  setDiceDecrement,
  setSideIncrement,
  setSideDecrement,
  setMaxLimitDice,
  setMinLimitDice,
  setMaxLimitSide,
  setMinLimitSide,
  setPlayerSession,
  setComputerSession,
  setShowSessionWin,
  setShowRoundCount,
  setContinueSession,
  setRestartSession,
} from "./ApplicationSlice/diceRollSlice";

export default function AppLogic() {
  const dispatch = useDispatch();

  /**--------------------------------------------------------------- WELCOMEPAGE LOGIC START --------------------------------------------------------**/

  const showInput = useSelector((state) => state.diceRoll.showInput);

  const genderValue = useSelector((state) => state.diceRoll.genderValue);

  const pictureLeftCheck = useSelector(
    (state) => state.diceRoll.pictureLeftCheck
  );

  const pictureRightCheck = useSelector(
    (state) => state.diceRoll.pictureRightCheck
  );

  const showModal = useSelector((state) => state.diceRoll.showModal);

  const roundsNumber = useSelector((state) => state.diceRoll.roundsNumber);

  const userName = useSelector((state) => state.diceRoll.userName);

  const userNameCorrect = useSelector(
    (state) => state.diceRoll.userNameCorrect
  );

  const userNameIncorrect = useSelector(
    (state) => state.diceRoll.userNameIncorrect
  );

  const roundsNumberCorrect = useSelector(
    (state) => state.diceRoll.roundsNumberCorrect
  );

  const roundsNumberIncorrect = useSelector(
    (state) => state.diceRoll.roundsNumberIncorrect
  );

  const inactiveButton = useSelector((state) => state.diceRoll.inactiveButton);

  const activeButton = useSelector((state) => state.diceRoll.activeButton);

  const showButtons = useSelector((state) => state.diceRoll.showButtons);

  const handleInput = (event) => {
    event.preventDefault();

    dispatch(setShowInput(!showInput));

    dispatch(setGenderValue(""));
  };

  const handleInputFirstChoice = (event) => {
    event.preventDefault();

    dispatch(setGenderValue("Male"));
  };

  const handleInputSecondChoice = (event) => {
    event.preventDefault();

    dispatch(setGenderValue("Female"));
  };

  const handleLeftCheck = (event) => {
    event.preventDefault();

    dispatch(setPictureLeftCheck(true));

    dispatch(setPictureRightCheck(false));
  };

  const handleRightCheck = (event) => {
    event.preventDefault();

    dispatch(setPictureRightCheck(true));

    dispatch(setPictureLeftCheck(false));
  };

  const handleUserName = (event) => {
    event.preventDefault();

    dispatch(setUserName(event.target.value));
  };

  const handleRoundsNumberOptionOne = (event) => {
    event.preventDefault();

    dispatch(setRoundsNumber(2));
  };

  const handleRoundsNumberOptionTwo = (event) => {
    event.preventDefault();

    dispatch(setRoundsNumber(4));
  };

  const handleRoundsNumberOptionThree = (event) => {
    event.preventDefault();

    dispatch(setRoundsNumber(8));
  };

  const handleCloseButton = (event) => {
    event.preventDefault();

    dispatch(setShowModal(false));

    dispatch(setRoundsNumber(0));

    dispatch(setUserName(""));

    dispatch(setUserNameCorrect(false));

    dispatch(setUserNameIncorrect(false));

    dispatch(setRoundsNumberCorrect(false));

    dispatch(setRoundsNumberIncorrect(false));

    dispatch(setPictureLeftCheck(false));

    dispatch(setPictureRightCheck(false));
  };

  const handleSaveButton = (event) => {
    event.preventDefault();

    if (roundsNumber === 0) {
      dispatch(setRoundsNumberIncorrect(true));
    }

    if (userName === "") {
      dispatch(setUserNameIncorrect(true));
    } else {
      dispatch(setShowModal(false));

      dispatch(setInactiveButton(true));

      dispatch(setActiveButton(false));

      dispatch(setShowButtons(true));
    }
  };

  useEffect(() => {
    if (pictureLeftCheck === true || pictureRightCheck === true) {
      setTimeout(() => {
        dispatch(setShowModal(true));
      }, 2000);

      dispatch(setShowButtons(false));
    } else {
      dispatch(setShowModal(false));
    }
  }, [pictureLeftCheck, pictureRightCheck, dispatch]);

  useEffect(() => {
    if (userName !== "") {
      dispatch(setUserNameCorrect(true));

      dispatch(setUserNameIncorrect(false));
    }

    if (roundsNumber > 0) {
      dispatch(setRoundsNumberCorrect(true));

      dispatch(setRoundsNumberIncorrect(false));
    }
  }, [userName, roundsNumber, dispatch]);

  /**--------------------------------------------------------------- WELCOMEPAGE LOGIC END ----------------------------------------------------------**/

  /**------------------------------------------------------------------ GAMEPAGE LOGIC START --------------------------------------------------------**/

  const diceNum = useSelector((state) => state.diceRoll.diceNum);

  const sideNum = useSelector((state) => state.diceRoll.sideNum);

  const maxLimitDice = useSelector((state) => state.diceRoll.maxLimitDice);

  const minLimitDice = useSelector((state) => state.diceRoll.minLimitDice);

  const maxLimitSide = useSelector((state) => state.diceRoll.maxLimitSide);

  const minLimitSide = useSelector((state) => state.diceRoll.minLimitSide);

  const totalPlayerSum = useSelector((state) => state.diceRoll.totalPlayerSum);

  const dicePlayerList = useSelector((state) => state.diceRoll.dicePlayerList);

  const totalComputerSum = useSelector(
    (state) => state.diceRoll.totalComputerSum
  );

  const diceComputerList = useSelector(
    (state) => state.diceRoll.diceComputerList
  );

  const showSessionWin = useSelector((state) => state.diceRoll.showSessionWin);

  const showPlayerWins = useSelector((state) => state.diceRoll.showPlayerWins);

  const showCompWins = useSelector((state) => state.diceRoll.showCompWins);

  const showDraws = useSelector((state) => state.diceRoll.showDraws);

  const showRoundCount = useSelector((state) => state.diceRoll.showRoundCount);

  const restartInactiveButton = useSelector(
    (state) => state.diceRoll.restartInactiveButton
  );

  const restartActiveButton = useSelector(
    (state) => state.diceRoll.restartActiveButton
  );

  const continueInactiveButton = useSelector(
    (state) => state.diceRoll.continueInactiveButton
  );

  const continueActiveButton = useSelector(
    (state) => state.diceRoll.continueActiveButton
  );

  const showWinEffect = useSelector((state) => state.diceRoll.showWinEffect);

  const { width, height } = useWindowSize();

  const handleDiceIncrement = () => {
    let maxValue = 10;

    dispatch(setDiceIncrement(maxValue));

    dispatch(setMaxLimitDice());
  };

  const handleDiceDecrement = () => {
    let minValue = 1;

    dispatch(setDiceDecrement(minValue));

    dispatch(setMinLimitDice());
  };

  const handleSideIncrement = () => {
    let maxValue = 20;

    dispatch(setSideIncrement(maxValue));

    dispatch(setMaxLimitSide());
  };

  const handleSideDecrement = () => {
    let minValue = 6;

    dispatch(setSideDecrement(minValue));

    dispatch(setMinLimitSide());
  };

  const handleRoll = () => {
    dispatch(setShowModal(true));

    dispatch(setShowRoundCount(showRoundCount + 1));

    dispatch(setPlayerSession());

    dispatch(setComputerSession());

    dispatch(setShowSessionWin());
  };

  /**------------------------------------------------------------------ GAMEPAGE LOGIC END --------------------------------------------------------**/

  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <WelcomePage
              {...props}
              handleInput={handleInput}
              showInput={showInput}
              handleInputFirstChoice={handleInputFirstChoice}
              handleInputSecondChoice={handleInputSecondChoice}
              genderValue={genderValue}
              handleLeftCheck={handleLeftCheck}
              handleRightCheck={handleRightCheck}
              pictureLeftCheck={pictureLeftCheck}
              pictureRightCheck={pictureRightCheck}
              showModal={showModal}
              handleRoundsNumberOptionOne={handleRoundsNumberOptionOne}
              handleRoundsNumberOptionTwo={handleRoundsNumberOptionTwo}
              handleRoundsNumberOptionThree={handleRoundsNumberOptionThree}
              roundsNumberCorrect={roundsNumberCorrect}
              roundsNumberIncorrect={roundsNumberIncorrect}
              roundsNumber={roundsNumber}
              userNameCorrect={userNameCorrect}
              userNameIncorrect={userNameIncorrect}
              handleUserName={handleUserName}
              userName={userName}
              handleCloseButton={handleCloseButton}
              handleSaveButton={handleSaveButton}
              inactiveButton={inactiveButton}
              activeButton={activeButton}
              showButtons={showButtons}
            />
          )}
        />

        {userName !== "" && (pictureLeftCheck || pictureRightCheck) ? (
          <Route
            exact
            path="/board"
            render={(props) => (
              <GamePage
                {...props}
                userName={userName}
                diceNum={diceNum}
                handleDiceIncrement={handleDiceIncrement}
                handleDiceDecrement={handleDiceDecrement}
                maxLimitDice={maxLimitDice}
                minLimitDice={minLimitDice}
                sideNum={sideNum}
                handleSideIncrement={handleSideIncrement}
                handleSideDecrement={handleSideDecrement}
                maxLimitSide={maxLimitSide}
                minLimitSide={minLimitSide}
                handleRoll={handleRoll}
                totalPlayerSum={totalPlayerSum}
                dicePlayerList={dicePlayerList}
                totalComputerSum={totalComputerSum}
                diceComputerList={diceComputerList}
                showModal={showModal}
                showSessionWin={showSessionWin}
                showRoundCount={showRoundCount}
                showPlayerWins={showPlayerWins}
                showCompWins={showCompWins}
                showDraws={showDraws}
                continueInactiveButton={continueInactiveButton}
                continueActiveButton={continueActiveButton}
                restartInactiveButton={restartInactiveButton}
                restartActiveButton={restartActiveButton}
                continueSession={() => dispatch(setContinueSession())}
                restartSession={() => dispatch(setRestartSession())}
                widht={width}
                height={height}
                showWinEffect={showWinEffect}
              />
            )}
          />
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </React.Fragment>
  );
}
