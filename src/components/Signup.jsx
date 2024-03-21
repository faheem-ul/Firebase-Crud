import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db, doc, setDoc } from "../firebase.confog";

function Signup() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  //   console.log(signupEmail, signupPass);

  const navigate = useNavigate();
  //   console.log("currentUser", auth.currentUser);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPass
      );
      console.log("sign up user credentials", userCredential);

      const uid = userCredential.user.uid;

      console.log(uid);

      //   doc(uid, userData);

      const userData = { email: signupEmail, password: signupPass, uid: uid };
      //   const userCollectionRef = doc(db, "signupUsers", uid);
      //   const userDocref = doc(userCollectionRef, uid);

      //   await addDoc(userCollectionRef, userData);

      //   firebase.firestore().collection("accounts").doc(uid).set(userData);
      await setDoc(doc(db, "signupUsers", uid), userData);

      navigate("/crud");
    } catch (error) {
      console.log("error is signup", error);
    }
  };

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
      <h1 className=" text-[30px] font-bold mb-5">Signup</h1>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          className=" block p-5 w-[20rem] bg-gray-700 text-white rounded-3xl border-2 border-black mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          value={signupPass}
          onChange={(e) => setSignupPass(e.target.value)}
          className=" block p-5 w-[20rem] bg-gray-700 text-white rounded-3xl border-2 border-black mb-5"
        />

        <button
          type="submit"
          className=" bg-green-700 mt-5 mb-5 rounded-2xl p-3 w-80"
        >
          Sign Up
        </button>
      </form>
      <p>
        Already have an account{" "}
        <span className=" text-red-500 underline">
          {" "}
          <Link to="/login">Login</Link>{" "}
        </span>
      </p>
    </div>
  );
}

export default Signup;
