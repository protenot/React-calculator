import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import AppRouterV5Lazy from './apps/AppRouterV5Lazy';
// import AppRouterV5 from './apps/AppRouterV5';
// import AppHistory from './apps/AppHistory';
import App from "./App";
//import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
