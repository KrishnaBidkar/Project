import React, { useState } from "react";
import "./App.css";
import UserTable from "./tables/UserTable";
import AddUserForm from "./tables/AddUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "John Doe", "age": 20, "grade":"A" , username: "floppydiskette" },
    { id: 2, name: "Jane Smith", "age": 22, "grade":"B" ,username: "siliconeidolon" },
    { id: 3, name: "Michael Johnson", "age": 21, "grade":"A", username: "benisphere" }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
