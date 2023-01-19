import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
