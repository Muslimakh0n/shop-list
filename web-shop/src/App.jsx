import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/assets/container/Header";
import { Home, SinglePage } from "./assets/pages";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="holder">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singlepage" element={<SinglePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
