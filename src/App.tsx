import React from "react";
import { Provider } from "react-redux";
import Store from "./store/store";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <Provider store={Store}>
      <DefaultLayout headerContent={<Header />} bodeyContent={<Body />} />;
    </Provider>
  );
}

export default App;
