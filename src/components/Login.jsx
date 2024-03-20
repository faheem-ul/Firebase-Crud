import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase.confog";

function Signup() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  //   console.log(signupEmail, signupPass);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     signupEmail,
    //     signupPass
    //   );
    //   console.log(userCredential);
    //   navigate("/crud");
    // } catch (error) {
    //   console.log("error is signup", error);
    // }
  };

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
      <h1 className=" text-[30px] font-bold mb-5">Signup</h1>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
