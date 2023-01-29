import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NavScreen from "./pages/navscreen";
import "./styles/app.css";
import { logContext } from "./contexts/logStatus";
import { useState, useEffect } from "react";
// import { onAuthStateChanged, getAuth } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // let auth = getAuth();
  /* const setTrue = () => {
    setIsLoggedIn(true);
  };
  const setFalse = () => {
    setIsLoggedIn(false);
  };
 */
  useEffect(() => {
    if (isLoggedIn) {
      console.log("logged in");
    } else console.log("wahala");
  });
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
          path="/"
          element={
            <logContext.Provider value={val}>
              <NavScreen />
            </logContext.Provider>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
