import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { auth } from "../firebase.confog";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  //   console.log(signupEmail, signupPass);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      console.log("login user credentials", userCredential);
      navigate("/crud");
    } catch (error) {
      console.log("error is login", error);
    }
  };

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
      <h1 className=" text-[30px] font-bold mb-5">LogIn</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          className=" block p-5 w-[20rem] bg-gray-700 text-white rounded-3xl border-2 border-black mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
          className=" block p-5 w-[20rem] bg-gray-700 text-white rounded-3xl border-2 border-black mb-5"
        />

        <button
          type="submit"
          className=" bg-green-700 mt-5 mb-5 rounded-2xl p-3 w-80"
        >
          LogIn
        </button>
      </form>
      <p>
        Don't have an account{" "}
        <span className=" text-red-500 underline">
          {" "}
          <Link to="/signup">SignUp</Link>{" "}
        </span>
      </p>
    </div>
  );
}

export default Signup;
