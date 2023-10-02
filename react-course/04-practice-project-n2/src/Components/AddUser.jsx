import Button from "./UI/Button";
import ErrorModal from "./ErrorModal";
import { useState } from "react";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (age < 18) {
      setShowModal(true);
    } else if (username == "") {
      setShowModal(true);
    }
    if (age === 0 || username == "") {
      return;
    }
    props.onAddUser({
      username: username,
      age: +age,
      id: Math.random().toString(),
    });
  };

  const formCloserHandler = () => {
    setShowModal(false);
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
            max="100"
            onChange={ageHandler}
          />
        </p>
      </div>
      <Button>Add User</Button>

      {showModal && (
        <ErrorModal
          title={age < 18 ? "Invalid age" : "Missing data"}
          content={
            age < 18
              ? "Please put an age greater than 18"
              : "Please add a valid name and age"
          }
          onClose={formCloserHandler}
        ></ErrorModal>
      )}
    </form>
  );
};

export default AddUser;
