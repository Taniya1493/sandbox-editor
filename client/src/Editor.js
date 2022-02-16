import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Editor() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Welcome to Our Website</h1>
        <ul className="list">
          <button className="optionsbtn">
            <Link to="/code" className="link">
              CodeEditor
            </Link>
          </button>
          <button className="optionsbtn">
            <Link to="/web" className="link">
              WebEditor
            </Link>
          </button>
          <button className="optionsbtn">
            <Link to="/text" className="link">
              TextEditor
            </Link>
          </button>
        </ul>
      </header>
    </div>
  );
}
