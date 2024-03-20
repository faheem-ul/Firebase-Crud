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
} from "../firebase.confog";

function Crud() {
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

        // console.log("user added", doc.id);
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

  const handleDelete = (user) => {
    // console.log(user.id);
    deleteDoc(doc(db, "users", user.id));
  };

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <form onSubmit={createuser}>
        <input
          className=" block p-5 w-[20rem] bg-gray-700 text-white rounded-3xl border-2 border-black mb-5"
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className=" block p-5 w-80 bg-gray-700 text-white rounded-3xl border-2 border-black"
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button
          className=" bg-green-700 mt-5 mb-5 rounded-2xl p-3 w-80"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="   rounded-lg flex items-center justify-center text-center gap-3 p-2"
          >
            <span className=" text-2xl font-bold">Name:</span>
            <span className=" text-xl font-medium">{user.Name}</span>
            <span className=" text-2xl font-bold">Age:</span>
            <span className=" text-xl font-medium">{user.Age}</span>
            <button
              className=" bg-yellow-700 mt-5 mb-5 rounded-2xl p-2 w-40 font-medium text-[17px]"
              onClick={() => handleEdit(user)}
            >
              Edit
            </button>
            <button
              className=" bg-red-700 mt-5 mb-5 rounded-2xl p-2 w-40 font-medium text-[17px]"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
