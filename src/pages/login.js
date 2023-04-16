/* eslint-disable react/no-unescaped-entities */

import { React, useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
// import fireContext from "../contexts/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "../styles/app.css";

import { logContext } from "../contexts/logStatus";

//import pic from "../../public/images/login_images/1.png";
const Login = () => {
  useEffect(() => {
    document.title = "Minigram - login";
  }, []);
  const [isLogged, setIsLogged] = useContext(logContext);

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
      .then(() => {
        setIsLogged(true);
        //
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  // console.log(error);

  if (isLogged == true) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="relative w-vw items-center h-screen">
      <div className="flex absolute inset-0 justify-center pb-10 w-vw border-solid border-gray-100 h-[692px] mr-14 mt-[100px]">
        <div className="hidden md:flex flex-none w-[368px] h-[385px] mt-7">
          <img src="/images/login_images/fancyBear.jpeg" />
        </div>

        <div className="flex flex-wrap md:shrink-0 justify-center border-hidden mt-7 border-[1px] border-gray-300 w-[368px] h-full -space-y-28">
          <div className="flex flex-wrap justify-center w-[352px] h-100 pt-10 border-gray-300 mb-2 -space-y-32 bg-white">
            <div className="flex items-center justify-center border-hidden border-2 w-44 h-16 mb-8">
              <h1 className="font-serif text-3xl text-blue-400">Minigram</h1>
            </div>

            {error && <p className="mb-2 text-xs text-red-700">{error}</p>}

            <form
              className="flex flex-wrap justify-center h-1/3 w-full"
              onSubmit={handleLogin}
            >
              <div className="flex flex-wrap justify-center w-[272px] h-20 space-y-1">
                <input
                  type="text"
                  placeholder="  Phone number, username or email address"
                  className=" text-xs text-black w-full border-solid border-[1px] h-9 border-gray-300 bg-gray-50 rounded-sm"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
                ></input>
                <input
                  type="password"
                  placeholder="  Password"
                  className="text-xs text-black w-[272px] border-solid border-[1px] h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                ></input>
              </div>

              <div className="h-10 pt-3 w-[272px]">
                <button
                  disabled={isInvalid}
                  type="submit"
                  className={
                    "bg-blue-400 w-[272px] rounded-lg text-white h-8 ${isInvalid && ' opacity-50'}"
                  }
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="text-center pt-5 w-[352px] h-16 text-sm bg-white">
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
