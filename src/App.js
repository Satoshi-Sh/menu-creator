import "./App.css";
import Main from "./components/Main.js";
import Live from "./live_components/Live";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="menu-creator">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/livepage" element={<Live />} />
      </Routes>
    </Router>
  );
}

export default App;
