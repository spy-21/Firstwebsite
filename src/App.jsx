import "./App.css";
import Header from "./components/header";
import React from "react";
import Registration from "./components/Reg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import MainPage from "./components/mainPage";
import StandardCalculator from "./components/Calculator";
import Music from "./components/music";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="calculator" element={<StandardCalculator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
