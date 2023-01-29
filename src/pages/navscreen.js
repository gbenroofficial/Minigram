import { React } from "react";
import "../styles/app.css";
import "../styles/sub.css";
import Home from "../components/home";
import NavBar from "../components/navbar";
import { useContext } from "react";
import { logContext } from "../contexts/logStatus";
import { Navigate } from "react-router-dom";
const NavScreen = () => {
  const [value, ,] = useContext(logContext);
  console.log(value[0]);

  if (value == false) {
    return <Navigate to="/Login" replace={true} />;
  }
  return (
    <div className="flex flex-wrap flex-row justify-center w-vw items-start bg-gray-50">
      <div className="w-61 h-screen border-solid border-1 border-gray-300">
        <NavBar />
      </div>
      <div className="flex-grow h-auto border-solid border-1 border-gray-300">
        <Home />
      </div>
    </div>
  );
};
export default NavScreen;
