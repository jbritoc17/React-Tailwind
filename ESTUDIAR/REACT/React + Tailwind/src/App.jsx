import { useState } from "react";
import React from "react";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="overflow-hidden">
      <div className="video-background"></div>
      <Navbar />
      
    </div>
  );
}

export default App;
