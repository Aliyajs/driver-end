import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import Header from "./components/header/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main/>} /> */}
      </Routes>
    </div>
  );
}