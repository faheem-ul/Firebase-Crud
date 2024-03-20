import { useState } from "react";

import {
  addDoc,
  collection,
  db,
  //   getDocs,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "./firebase.confog";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const createuser = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={createuser}>
        <input
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;
