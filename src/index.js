import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";

import "./index.scss";
import { Home } from "./pages/Home";

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById("app"));
