import React, { useState } from "react";
import Form from "./components/Form";
import User from "./components/User";

function App() {
  const DEFAULT_USER = { id: "0", name: "ryan", email: "email@email.com" };
  const [allUsers, setAllUsers] = useState([]);
  return (
    <div className="container max-w-3xl">
      <Form allUsers={allUsers} setAllUsers={setAllUsers} />
      <div className="flex flex-wrap justify-evenly">
        {allUsers.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
