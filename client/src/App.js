import "./App.css";
import Editor from "./Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewEditor from "./routes/NewEditor";
import WebEditor from "./routes/WebEditor";
import TextEditor from "./routes/TextEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/code" element={<NewEditor />} />
        <Route path="/text" element={<TextEditor />} />
        <Route path="/web" element={<WebEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
