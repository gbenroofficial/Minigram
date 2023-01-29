import React from "react";
import { useContext } from "react";
import { logContext } from "../contexts/logStatus";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const auth = getAuth();
  const [value, setValue] = useContext(logContext);
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setValue(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(value);
  return (
    <div className="h-screen w-61">
      <div>
        <button
          onClick={handleLogOut}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
        >
          log out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
