import React from "react";

import './asset/favicon.ico'
import './asset/vite.svg'
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleWork from "./pages/SingleWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:singleId" element={<SingleWork/>}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
