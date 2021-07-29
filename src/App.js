import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLogic from "./AppLogic.js";
import { Provider } from "react-redux";
import diceRollStore from "./Application/diceRollStore";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={diceRollStore}>
        <AppLogic />
      </Provider>
    </BrowserRouter>
  );
}
