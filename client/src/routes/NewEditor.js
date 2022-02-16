import React, { useState, useContext } from "react";
import CodeArea from "../codecomponents/CodeArea";
import Options from "../codecomponents/Options";
import OutputArea from "../codecomponents/OutputArea";
import { GlobalProvider } from "../context/GlobalState";
import Navbar from "../codecomponents/Navbar";
import "../CSS/App.css";

const NewEditor = () => {
  return (
    <GlobalProvider>
      <div class="wrapper">
        <Navbar />
        <div class="codeandoptions">
          <Options />
          <CodeArea />
        </div>
        <div>
          <OutputArea />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default NewEditor;
