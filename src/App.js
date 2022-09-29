import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./component/AboutMe";
import Homepage from "./component/Homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
