import { logContext } from "../contexts/logStatus";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import NavScreen from "./navscreen";

const Logger = () => {
  const [value, ,] = useContext(logContext);
  //   const navigate = useNavigate();
  if (value == false) {
    return <Navigate to="/Login" replace={true} />;
  }
  return <NavScreen />;
};

export default Logger;
