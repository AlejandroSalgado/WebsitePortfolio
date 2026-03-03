import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameDevPortfolio from "./components/GameDevPortfolio";
import { Toaster } from "./components/ui/toaster";

// 
function App() {
  //  Use this when in developer mode: <BrowserRouter basename="/">
  // Use this to deploy:  <BrowserRouter basename="/WebsitePortfolio">
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<GameDevPortfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
