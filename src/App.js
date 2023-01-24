import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import "./styles/app.css";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
