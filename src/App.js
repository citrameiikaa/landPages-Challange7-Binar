/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import '@popperjs/core';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Car from "./pages/CarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
