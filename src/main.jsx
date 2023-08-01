import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import './asset/favicon.ico'
import './asset/vite.svg'



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<App />
  </BrowserRouter>
);
document.title = 'Anthony Atta-Konadu';