import { createSlice } from "@reduxjs/toolkit";

export const diceRollSlice = createSlice({
  name: "diceRoll",
  initialState: {
    showInput: false,
    genderValue: "",
    pictureLeftCheck: false,
    pictureRightCheck: false,
    showModal: false,
    userName: "",
    roundsNumber: 0,
    userNameCorrect: "",
    userNameIncorrect: "",
    roundsNumberCorrect: "",
    roundsNumberIncorrect: "",
    inactiveButton: false,
    activeButton: false,
    showButtons: false,
    diceNum: 1,
    sideNum: 6,
    maxLimitDice: "",
    minLimitDice: "",
    maxLimitSide: "",
    minLimitSide: "",
    totalPlayerSum: 0,
    dicePlayerList: [],
    totalComputerSum: 0,
    diceComputerList: [],
    showSessionWin: "",
    showPlayerWins: 0,
    showCompWins: 0,
    showDraws: 0,
    showRoundCount: 0,
    continueInactiveButton: false,
    continueActiveButton: true,
    restartInactiveButton: true,
    restartActiveButton: false,
    showWinEffect: 0,
  },
  reducers: {
    setShowInput: (state, action) => {
      state.showInput = action.payload;
    },

    setGenderValue: (state, action) => {
      state.genderValue = action.payload;
    },

    setPictureLeftCheck: (state, action) => {
      state.pictureLeftCheck = action.payload;
    },

    setPictureRightCheck: (state, action) => {
      state.pictureRightCheck = action.payload;
    },

    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },

    setRoundsNumber: (state, action) => {
      state.roundsNumber = action.payload;
    },

    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    setUserNameCorrect: (state, action) => {
      state.userNameCorrect = action.payload;
    },

    setUserNameIncorrect: (state, action) => {
      state.userNameIncorrect = action.payload;
    },

    setRoundsNumberCorrect: (state, action) => {
      state.roundsNumberCorrect = action.payload;
    },

    setRoundsNumberIncorrect: (state, action) => {
      state.roundsNumberIncorrect = action.payload;
    },

    setInactiveButton: (state, action) => {
      state.inactiveButton = action.payload;
    },

    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },

    setShowButtons: (state, action) => {
      state.showButtons = action.payload;
    },

    setDiceIncrement: (state, action) => {
      state.diceNum === action.payload
        ? (state.diceNum = 10)
        : (state.diceNum += 1);
    },

    setDiceDecrement: (state, action) => {
      state.diceNum === action.payload
        ? (state.diceNum = 1)
        : (state.diceNum -= 1);
    },

    setSideIncrement: (state, action) => {
      state.sideNum === action.payload
        ? (state.sideNum = 20)
        : (state.sideNum += 1);
    },

    setSideDecrement: (state, action) => {
      state.sideNum === action.payload
        ? (state.sideNum = 6)
        : (state.sideNum -= 1);
    },

    setMaxLimitDice: (state) => {
      state.minLimitDice = "";

      state.diceNum >= 9
        ? (state.maxLimitDice = "click")
        : state.diceNum === 10
        ? (state.maxLimitDice = "")
        : state.diceNum === 9
        ? (state.maxLimitDice = "")
        : state.diceNum === 8
        ? (state.maxLimitDice = "")
        : state.diceNum === 7
        ? (state.maxLimitDice = "")
        : state.diceNum === 6
        ? (state.maxLimitDice = "")
        : state.diceNum === 5
        ? (state.maxLimitDice = "")
        : state.diceNum === 4
        ? (state.maxLimitDice = "")
        : state.diceNum === 3
        ? (state.maxLimitDice = "")
        : state.diceNum === 2
        ? (state.maxLimitDice = "")
        : state.diceNum === 1
        ? (state.maxLimitDice = "")
        : (state.maxLimitDice = "");
    },

    setMinLimitDice: (state) => {
      state.maxLimitDice = "";

      state.diceNum <= 2
        ? (state.minLimitDice = "click")
        : state.diceNum === 1
        ? (state.minLimitDice = "")
        : state.diceNum === 2
        ? (state.minLimitDice = "")
        : state.diceNum === 3
        ? (state.minLimitDice = "")
        : state.diceNum === 4
        ? (state.minLimitDice = "")
        : state.diceNum === 5
        ? (state.minLimitDice = "")
        : state.diceNum === 6
        ? (state.minLimitDice = "")
        : state.diceNum === 7
        ? (state.minLimitDice = "")
        : state.diceNum === 8
        ? (state.minLimitDice = "")
        : state.diceNum === 9
        ? (state.minLimitDice = "")
        : state.diceNum === 10
        ? (state.minLimitDice = "")
        : (state.minLimitDice = "");
    },

    setMaxLimitSide: (state) => {
      state.minLimitSide = "";

      state.sideNum >= 19
        ? (state.maxLimitSide = "click")
        : state.sideNum === 20
        ? (state.maxLimitSide = "")
        : state.sideNum === 19
        ? (state.maxLimitSide = "")
        : state.sideNum === 18
        ? (state.maxLimitside = "")
        : state.sideNum === 17
        ? (state.maxLimitside = "")
        : state.sideNum === 16
        ? (state.maxLimitside = "")
        : state.sideNum === 15
        ? (state.maxLimitSide = "")
        : state.sideNum === 14
        ? (state.maxLimitSide = "")
        : state.sideNum === 13
        ? (state.maxLimitSide = "")
        : state.sideNum === 12
        ? (state.maxLimitSide = "")
        : state.sideNum === 11
        ? (state.maxLimitSide = "")
        : state.sideNum === 10
        ? (state.maxLimitSide = "")
        : state.sideNum === 9
        ? (state.maxLimitSide = "")
        : state.sideNum === 8
        ? (state.maxLimitSide = "")
        : state.sideNum === 7
        ? (state.maxLimitSide = "")
        : state.sideNum === 6
        ? (state.maxLimitSide = "")
        : (state.maxLimitSide = "");
    },

    setMinLimitSide: (state) => {
      state.maxLimitSide = "";

      state.sideNum <= 7
        ? (state.minLimitSide = "click")
        : state.sideNum === 6
        ? (state.minLimitSide = "")
        : state.sideNum === 7
        ? (state.minLimitSide = "")
        : state.sideNum === 8
        ? (state.minLimitside = "")
        : state.sideNum === 9
        ? (state.minLimitside = "")
        : state.sideNum === 10
        ? (state.minLimitside = "")
        : state.sideNum === 11
        ? (state.minLimitSide = "")
        : state.sideNum === 12
        ? (state.minLimitSide = "")
        : state.sideNum === 13
        ? (state.minLimitSide = "")
        : state.sideNum === 14
        ? (state.minLimitSide = "")
        : state.sideNum === 15
        ? (state.minLimitSide = "")
        : state.sideNum === 16
        ? (state.minLimitSide = "")
        : state.sideNum === 17
        ? (state.minLimitSide = "")
        : state.sideNum === 18
        ? (state.minLimitSide = "")
        : state.sideNum === 19
        ? (state.minLimitSide = "")
        : state.sideNum === 20
        ? (state.minLimitSide = "")
        : (state.minLimitSide = "");
    },

    setPlayerSession: (state) => {
      let tempRandomNum = 0;
      let tempTotalSum = 0;
      let tempDiceList = [];

      for (let i = 1; i <= state.diceNum; i++) {
        tempRandomNum = 1 + Math.floor(Math.random() * state.sideNum);

        tempTotalSum += tempRandomNum;

        tempDiceList.push(tempRandomNum);
      }

      state.totalPlayerSum = tempTotalSum;

      state.dicePlayerList = tempDiceList;
    },

    setComputerSession: (state) => {
      let tempRandomNum = 0;
      let tempTotalSum = 0;
      let tempDiceList = [];

      for (let i = 1; i <= state.diceNum; i++) {
        tempRandomNum = 1 + Math.floor(Math.random() * state.sideNum);

        tempTotalSum += tempRandomNum;

        tempDiceList.push(tempRandomNum);
      }

      state.totalComputerSum = tempTotalSum;

      state.diceComputerList = tempDiceList;
    },

    setShowSessionWin: (state) => {
      if (state.totalPlayerSum > state.totalComputerSum) {
        state.showPlayerWins += 1;
      } else if (state.totalComputerSum > state.totalPlayerSum) {
        state.showCompWins += 1;
      } else {
        state.showDraws += 1;
      }

      state.continueInactiveButton = false;
      state.continueActiveButton = true;
      state.restartInactiveButton = true;
      state.restartActiveButton = false;

      if (state.showRoundCount === state.roundsNumber) {
        if (state.showPlayerWins > state.showCompWins) {
          state.showSessionWin = state.userName + " is winner!";

          state.showWinEffect = 1;
        } else if (state.showCompWins > state.showPlayerWins) {
          state.showSessionWin = "Computer is winner!";

          state.showWinEffect = 1;
        } else {
          state.showSessionWin = "It is a draw!";
        }

        state.continueInactiveButton = true;
        state.continueActiveButton = false;
        state.restartInactiveButton = false;
        state.restartActiveButton = true;
      }
    },

    setShowRoundCount: (state, action) => {
      state.showRoundCount = action.payload;
    },

    setContinueSession: (state) => {
      state.diceNum = 1;

      state.sideNum = 6;

      state.maxLimitDice = "";

      state.minLimitDice = "";

      state.maxLimitSide = "";

      state.minLimitSide = "";

      document.getElementById("buttonClose").click();

      state.showModal = false;

      state.showEffect = 0;
    },

    setRestartSession: (state) => {
      state.diceNum = 1;

      state.sideNum = 6;

      state.maxLimitDice = "";

      state.minLimitDice = "";

      state.maxLimitSide = "";

      state.minLimitSide = "";

      state.showPlayerWins = 0;

      state.showCompWins = 0;

      state.showDraws = 0;

      state.showSessionWin = "";

      state.showRoundCount = 0;

      state.continueInactiveButton = false;

      state.continueActiveButton = true;

      state.restartInactiveButton = true;

      state.restartActiveButton = false;

      document.getElementById("buttonClose").click();

      state.showModal = false;

      state.showWinEffect = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setShowInput,
  setGenderValue,
  setPictureLeftCheck,
  setPictureRightCheck,
  setShowModal,
  setRoundsNumber,
  setUserName,
  setShowButtons,
  setUserNameCorrect,
  setUserNameIncorrect,
  setRoundsNumberCorrect,
  setRoundsNumberIncorrect,
  setInactiveButton,
  setActiveButton,
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
} = diceRollSlice.actions;

export default diceRollSlice.reducer;
