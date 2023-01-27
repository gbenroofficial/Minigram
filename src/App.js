import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NavScreen from "./pages/navscreen";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Navscreen" element={<NavScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
