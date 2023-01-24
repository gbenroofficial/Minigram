/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { React, useState, useHistory } from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";
import "../styles/sub.css";
//import pic from "../../public/images/login_images/1.png";
const Signup = () => {
  //   const history = useHistory();
  //   const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === ""; */

  const handleSignup = () => {};
  return (
    <div className="relative w-vw items-center h-253 bg-gray-50">
      <div className="flex absolute inset-0 justify-center pb-10 w-vw -space-x-6 border-solid border-gray-100 h-full mr-14">
        <div className="hidden w-116 h-173">
          <img src="/images/login_images/iphone-with-profile.jpg" />
        </div>

        <div className="flex flex-wrap md:shrink-0 justify-center border-hidden mt-3 border-1 border-gray-300 w-92 h-full -space-y-40">
          <div className="flex flex-wrap justify-center w-88 h-160 pt-10 border-solid border-1 border-gray-300 bg-white mb-2">
            <div className="flex justify-center border-hidden border-1 w-44 h-12 mt-2">
              <img src="/images/login_images/logo.png"></img>
            </div>
            <div className="flex items-center w-68 text-center text-gray-500 font-semibold text-md border-hidden border-1 border-gray-300 h-11">
              Sign up to see photos and videos from your friends.
            </div>
            <div className="flex flex-wrap items-center h-8 w-68 border-1 border-hidden border-gray-400">
              <button className="bg-blue-500 w-68 rounded-lg text-white h-8">
                Log in with Facebook
              </button>
            </div>
            <div className="inline-flex items-center justify-center w-full border-hidden border-2 border-gray-400 w-68 h-5">
              <div className="flex justify-center w-68 h-px bg-gray-300 border-1 dark:bg-gray-700 items-center">
                <span className="border-hidden border-1 border-gray-400 px-5 text-xs font-semibold text-gray-500 bg-white dark:text-white dark:bg-gray-900">
                  OR
                </span>
              </div>
            </div>
            <form
              className="flex flex-wrap justify-center h-90 w-full border-hidden border-1 border-gray-300"
              onSubmit={handleSignup}
            >
              <div className="flex flex-wrap justify-center w-68 h-20 space-y-1 mb-20">
                <input
                  type="text"
                  placeholder="  Mobile number or email address"
                  className=" text-xs text-black w-68 border-solid border-1 h-9 border-gray-300 bg-gray-50 rounded-sm"
                  onChange={({ target }) => setEmailAddress(target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="  Full Name"
                  className="text-xs text-black w-68 border-solid border-1 h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setFullname(target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="  Username"
                  className="text-xs text-black w-68 border-solid border-1 h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setUsername(target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="  Password"
                  className="text-xs text-black w-68 border-solid border-1 h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setPassword(target.value)}
                ></input>
              </div>
              <div className="flex flex-wrap text-center text-xs w-68 h-28 border-hidden border-1 border-gray-300 text-gray-500">
                People who use our service may have uploaded your contact
                information to Instagram. Learn more <p></p>
                <p className="mt-3">
                  By signing up, you agree to our Terms. Learn how we collect,
                  use and share your data in our Privacy Policy and how we use
                  cookies and similar technology in our Cookies Policy.
                </p>
              </div>
              <div className="flex flex-wrap items-center h-8 w-68 border-hidden border-1 border-gray-400">
                <button
                  type="submit"
                  className="bg-blue-400 w-68 rounded-lg text-white h-8 "
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap justify-center items-center w-88 h-16 border-solid border-1 border-gray-300 text-sm bg-white">
            Have an account? {"  "}
            <Link to={"/login"} className="text-blue-500 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
