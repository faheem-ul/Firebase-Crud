import { useState, useEffect } from "react";

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
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    const q = query(usersCollectionref);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersAray = [];
      snapshot.forEach((doc) => {
        const user = { id: doc.id, ...doc.data() };
        // console.log(user);
        usersAray.push(user);
        setUsers(user);
      });
      setUsers(usersAray);
    });
    return () => unsubscribe();
  }, []);
  // console.log(users);

  const handleEdit = async (user) => {
    setName(user.Name);
    setAge(user.Age);
    setIsEditing(true);
    setEditUserID(user.id);
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
      {users.map((user, index) => (
        <li key={index}>
          Name: {user.Name}, Age: {user.Age}
          <button onClick={() => handleEdit(user)}>Edit</button>
          {/* <button onClick={() => handleDelete(user)}>Delete</button> */}
        </li>
      ))}
    </>
  );
}

export default App;
