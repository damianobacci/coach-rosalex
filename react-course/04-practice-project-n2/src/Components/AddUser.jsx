import Button from "./UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    props.onAddUser({
      username: username,
      age: age,
      id: Math.random().toString(),
    });
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={usernameHandler}
          />
        </p>
        <p>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={age}
            id="age"
            min="18"
            max="100"
            onChange={ageHandler}
          />
        </p>
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default AddUser;
