/* eslint-disable no-undef */
import { React } from "react";
import "../styles/app.css";
//import pic from "../../public/images/login_images/1.png";
const Login = () => {
  /*  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";
 */
  return (
    <div className="relative w-vw items-center h-screen">
      <div className="flex absolute inset-0 pb-10 w-vw my-7 justify-center place-content-center items-center border-solid border-gray-100">
        <div className="hidden md:flex w-100 h-full">
          <img src="/images/login_images/iphone-with-profile.jpg" />
        </div>

        <div className="h-4/5 border-solid">
          <div className="justify-center items-center w-3/5">
            <img
              src="/images/login_images/logo.png"
              className="mt-2 mb-4"
            ></img>
          </div>
          <form className="border-y-4/5">
            <div className="border-solid  w-full border-gray-50 pl-3">
              <input
                type="text"
                placeholder="Phone number, username or email address"
                className="text-xs text-gray-50 w-full"
              ></input>
              <input
                type="text"
                placeholder="Password"
                className="text-xs text-gray-50"
              ></input>
            </div>
          </form>
        </div>
      </div>
      <footer className="absolute inset-x-0 bottom-0 h-16 w-vw border-black-100 border-solid"></footer>
      {/* <div className="flex w-3/5">
        <img src="/images/login_images/iphone-with-profile.jpg" />
      </div>
      <div className="flex flex-col w-2/5 h-4/5 items-center">
        <div className="h-4/5 w-full border-solid">
          <h1 className="flex justify-center w-full pr-3">
            <img
              src="/images/login_images/logo.png"
              className="mt-2 w-11/24 mb-4"
            ></img>
          </h1>
          <form className="border-y-4/5">
            <div className="border-solid  w-full border-gray-50 pl-3">
              <input
                type="text"
                placeholder="Phone number, username or email address"
                className="text-xs text-gray-50 w-full"
              ></input>
              <input
                type="text"
                placeholder="Password"
                className="text-xs text-gray-50"
              ></input>
            </div>
          </form>
        </div>
        <div className="w-full h-1/5"></div>
      </div> */}
    </div>
  );
};

export default Login;
