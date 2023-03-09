import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
// import NavScreen from "./pages/navscreen";
import Logger from "./pages/logger";
import "./styles/app.css";
import { logContext } from "./contexts/logStatus";
import { useState } from "react";

// import { onAuthStateChanged, getAuth } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const val = [isLoggedIn, setIsLoggedIn];
  console.log(window.location.pathname);
  return (
    <Router>
      <Routes>
        <Route
          path="/Login"
          element={
            <logContext.Provider value={val}>
              <Login />
            </logContext.Provider>
          }
        ></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route
          path="/*"
          element={
            <logContext.Provider value={val}>
              <Logger />
            </logContext.Provider>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
