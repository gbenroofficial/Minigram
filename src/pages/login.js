/* eslint-disable no-undef */
import { React, useEffect } from "react";
//import pic from "../../public/images/login_images/1.png";
const Login = () => {
  let i = 1;

  useEffect(() => {
    setInterval(() => {
      if (i < 4) {
        i += 1;
      } else {
        i = 1;
      }
    }, 5000);
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/login_images/${i}.png" />
      </div>
    </div>
  );
};

export default Login;
