/* eslint-disable react/no-unescaped-entities */

import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import fireContext from "../contexts/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import Homepage from "./homepage";
import "../styles/app.css";
import "../styles/sub.css";
//import pic from "../../public/images/login_images/1.png";
const Login = () => {
  useEffect(() => {
    document.title = "Instagram - login";
  }, []);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  //   const { auth } = useContext(fireContext);

  let auth = getAuth();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => navigate("/Homepage"))
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  console.log(error);

  return (
    <div className="relative w-vw items-center h-screen bg-gray-50">
      <div className="flex absolute inset-0 justify-center pb-10 pt-4 w-vw -space-x-6 border-solid border-gray-100 h-173 mr-14">
        <div className="hidden md:flex flex-none w-116 h-full">
          <img src="/images/login_images/iphone-with-profile.jpg" />
        </div>

        <div className="flex flex-wrap md:shrink-0 justify-center border-hidden mt-7 border-1 border-gray-300 w-92 h-full -space-y-28">
          <div className="flex flex-wrap justify-center w-88 h-100 pt-10 border-solid border-1 border-gray-300 mb-2 -space-y-32 bg-white">
            <div className="flex items-center justify-center border-hidden border-2 w-44 h-16 mb-8">
              <img
                src="/images/login_images/logo.png"
                className="mt-2 mb-2"
              ></img>
            </div>

            {error && <p className="mb-2 text-xs text-red-700">{error}</p>}

            <form
              className="flex flex-wrap justify-center h-1/3 w-full"
              onSubmit={handleLogin}
            >
              <div className="flex flex-wrap justify-center w-68 h-20 space-y-1">
                <input
                  type="text"
                  placeholder="  Phone number, username or email address"
                  className=" text-xs text-black w-full border-solid border-1 h-9 border-gray-300 bg-gray-50 rounded-sm"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
                ></input>
                <input
                  type="password"
                  placeholder="  Password"
                  className="text-xs text-black w-68 border-solid border-1 h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                ></input>
              </div>

              <div className="h-10 pt-3 w-68">
                <button
                  disabled={isInvalid}
                  type="submit"
                  className={
                    "bg-blue-400 w-68 rounded-lg text-white h-8 ${isInvalid && ' opacity-50'}"
                  }
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="text-center pt-5 w-88 h-16 border-solid border-1 border-gray-300 text-sm bg-white">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <footer className="absolute inset-x-0 bottom-0 h-16 w-vw border-black-100 border-solid"></footer>
    </div>
  );
};

export default Login;
