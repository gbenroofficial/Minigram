import { useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Logger = lazy(() => import("./pages/logger"));

import "./styles/app.css";
import { logContext } from "./contexts/logStatus";

// import { onAuthStateChanged, getAuth } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const val = [isLoggedIn, setIsLoggedIn];

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
