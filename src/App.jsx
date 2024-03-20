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
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserID] = useState(null);

  const usersCollectionref = collection(db, "users");

  const createuser = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateDoc(doc(db, "users", editUserId), {
          Name: name,
          Age: age,
        });
        console.log("user updated against Id", editUserId);
      } else {
        const doc = await addDoc(usersCollectionref, {
          Name: name,
          Age: age,
        });

        console.log("user added", doc.id);
        setAge("");
        setName("");
        setIsEditing(false);
        setEditUserID(null);
      }
    } catch (err) {
      console.log("user not added ", err);
    }
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
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
