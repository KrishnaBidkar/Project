import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "", age: "", grade: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username || !user.age || !user.grade) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <label>Age</label>
      <input type="text" name="age" value={user.age} onChange={handleInputChange} />
      <label>Grade</label>
      <input type="text" name="grade" value={user.grade} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;

