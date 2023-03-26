/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signOut,
} from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { db, auth } from "../lib/firebase";

import "../styles/app.css";

//import pic from "../../public/images/login_images/1.png";
const Signup = () => {
  useEffect(() => {
    document.title = "Minigram - sign up";
  }, []);
  //   const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  /*  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === ""; */

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        userCredential.user.displayName = username.toLowerCase();
        let user = {
          userId: userCredential.user.uid,
          username: username.toLowerCase(),
          fullName: fullname,
          emailAddress: emailAddress.toLowerCase(),
          dateCreated: Date.now(),
          following: [],
          followers: [],
        };

        setDoc(doc(db, "users", userCredential.user.uid), user);
        navigate("/Login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   console.log(error);

  return (
    <div className="flex flex-wrap justify-center w-vw items-center h-[1012px] bg-gray-50">
      <div className="flex flex-wrap justify-center pb-10 w-vw border-solid border-gray-100 h-full">
        <div className="hidden w-[464px] h-[692px]">
          <img src="/images/login_images/iphone-with-profile.jpg" />
        </div>

        <div className="flex flex-wrap md:shrink-0 justify-center border-hidden mt-3 border-[1px] border-gray-300 w-[368px] h-full -space-y-40">
          <div className="flex flex-wrap justify-center w-[352px] h-[650px] pt-10 border-solid border-[1px] border-gray-300 bg-white mb-2">
            <div className="flex justify-center border-hidden border-[1px] w-44 h-12 mt-2">
              <h1 className="font-serif text-3xl text-blue-400">Minigram</h1>
            </div>
            <div className="flex items-center w-[272px] text-center text-gray-500 font-semibold text-md border-hidden border-[1px] border-gray-300 h-11">
              Sign up to see photos and videos from your friends.
            </div>
            <div className="flex flex-wrap items-center h-8 w-[272px] border-[1px] border-hidden border-gray-400">
              <button className="bg-blue-500 w-[272px] rounded-lg text-white h-8">
                Log in with Facebook
              </button>
            </div>
            <div className="inline-flex items-center justify-center border-hidden border-[1px] border-gray-400 w-[272px] h-5">
              <div className="flex justify-center w-[272px] h-[0.256px] bg-gray-300 border-[1px] dark:bg-gray-700 items-center">
                <span className="border-hidden border-[1px] border-gray-400 px-5 text-xs font-semibold text-gray-500 bg-white dark:text-white dark:bg-gray-900">
                  OR
                </span>
              </div>
            </div>
            <form
              className="flex flex-wrap justify-center h-90 w-full border-hidden border-[1px] border-gray-300"
              onSubmit={handleSignup}
            >
              <div className="flex flex-wrap justify-center w-[272px] h-20 space-y-1 mb-20">
                <input
                  type="text"
                  placeholder="  Mobile number or email address"
                  className=" text-xs text-black w-[272px] border-solid border-[1px] h-9 border-gray-300 bg-gray-50 rounded-sm"
                  onChange={({ target }) => setEmailAddress(target.value)}
                  value={emailAddress}
                ></input>
                <input
                  type="text"
                  placeholder="  Full Name"
                  className="text-xs text-black w-[272px] border-solid border-[1px] h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setFullname(target.value)}
                  value={fullname}
                ></input>
                <input
                  type="text"
                  placeholder="  Username"
                  className="text-xs text-black w-[272px] border-solid border-[1px] h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setUsername(target.value)}
                  value={username}
                ></input>
                <input
                  type="password"
                  placeholder="  Password"
                  className="text-xs text-black w-[272px] border-solid border-[1px] h-9 border-gray-300 rounded-sm bg-gray-50"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                ></input>
              </div>
              <div className="flex flex-wrap text-center text-xs w-[272px] h-28 border-hidden border-[1px] border-gray-300 text-gray-500">
                People who use our service may have uploaded your contact
                information to Minigram. <p></p>
                <p className="mt-3">
                  By signing up, you agree to our Terms. Learn how we collect,
                  use and share your data in our Privacy Policy and how we use
                  cookies and similar technology in our Cookies Policy.
                </p>
              </div>
              <div className="flex flex-wrap items-center h-8 w-[272px] border-hidden border-[1px] border-gray-400">
                <button
                  type="submit"
                  className="bg-blue-400 w-[272px] rounded-lg text-white h-8 "
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap justify-center items-center w-[352px] h-16 border-solid border-[1px] border-gray-300 text-sm bg-white">
            Have an account? {"  "}
            <Link to={"/Login"} className="text-blue-500 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
