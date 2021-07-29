import { configureStore } from "@reduxjs/toolkit";
import diceRollReducer from "../ApplicationSlice/diceRollSlice";

export default configureStore({
  reducer: {
    diceRoll: diceRollReducer,
  },
});
