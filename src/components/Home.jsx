import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center px-36">
      <button
        className=" bg-orange-700 mt-5 mb-5 rounded-2xl p-2 w-40 font-medium text-[17px]"
        onClick={() => {
          navigate("/login");
        }}
      >
        LogIn
      </button>
      <button
        className=" bg-orange-700 mt-5 mb-5 rounded-2xl p-2 w-40 font-medium text-[17px]"
        onClick={() => {
          navigate("/signup");
        }}
      >
        SignUp
      </button>

      <h1 className="text-3xl font-bold mb-4">Welcome to CRUD Project</h1>
      <p className="text-lg mb-4 text-center">
        This project is a CRUD-based application built with React and Firebase.
        It allows users to perform Create, Read, Update, and Delete operations
        on data stored in a Firebase database. React Router is used for
        navigation, with login and signup pages accessible to all users, and the
        CRUD operations restricted to authenticated users.
      </p>
    </div>
  );
}

export default Home;
