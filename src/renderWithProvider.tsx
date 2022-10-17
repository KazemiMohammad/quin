import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./store/reducer";



export function renderWithProviders(ui: any, { reduxState }: any = {}) {
  const Store = configureStore({ reducer: MainReducer });
  return render(<Provider store={Store}>{ui}</Provider>);
}
