import React from "react";
import Waitlist from "./Waitlist";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Waitlist />
        <div className="orange-divider">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
