import "./App.css";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
