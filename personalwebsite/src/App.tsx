import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col items-center space-y-4">
      <h1 className="text-xl mt-4">Chase Houser</h1>
      <p>This is the best website ever.</p>

      <div className="bg-slate-200 w-1/2 h-1/2 rounded-xl p-4 text-center">
        <h1 className="text-xl">Hi, I'm Chase 👋</h1> <br />
        I'm a rising second-year Computer Science and Business Administration
        student at Northeastern University with a deep passion for learning new
        things.
        <br />
        <br />
        🚴 In the past, I've worked as a bike mechanic, a home automation
        technician, and co-managed a local charity that donated refurbished
        bicycles.
        <br />
        <br />
        💻 Currently, I'm a full-stack web developer at NEU's Khoury College,
        working on Odyssey, a Khoury-specific learning platform.
        <br />
        <br />
        🔍 I'm particularly interested in backend architecture—how different
        systems interact, scale, and integrate, especially within AWS.
      </div>
    </div>
  );
}

export default App;
