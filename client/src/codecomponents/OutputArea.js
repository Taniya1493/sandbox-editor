import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../CSS/OutputArea.css";

function OutputArea() {
  const { result } = useContext(GlobalContext);
  return (
    <div className="outputarea">
      <textarea className="textarea" value={result}></textarea>
    </div>
  );
}

export default OutputArea;
