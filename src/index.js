import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Reviews from "../pages/reviews";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <Reviews />
  </StrictMode>,
  rootElement
);
