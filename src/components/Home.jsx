import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center px-36">
      <h1 className="text-3xl font-bold mb-4">Welcome to CRUD Project</h1>
      <p className="text-lg mb-4 text-center">
        This project is a CRUD-based application built with React and Firebase.
        It allows users to perform Create, Read, Update, and Delete operations
        on data stored in a Firebase database. React Router is used for
        navigation, with login and signup pages accessible to all users, and the
        CRUD operations restricted to authenticated users.
      </p>
      <p className="text-lg mb-4">
        To get started, you can{" "}
        <Link to="/login" className="text-blue-500">
          login
        </Link>{" "}
        or{" "}
        <Link to="/signup" className="text-blue-500">
          signup
        </Link>{" "}
        if you don't have an account yet. Once logged in, you'll be able to
        access the{" "}
        <Link to="/crud" className="text-blue-500">
          CRUD
        </Link>{" "}
        functionality.
      </p>
    </div>
  );
}

export default Home;
