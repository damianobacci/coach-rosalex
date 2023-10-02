import AddUser from "./Components/AddUser";
import "./main.css";
import Card from "./Components/UI/Card";
import UsersList from "./Components/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (data) => {
    setUsers((prevUsers) => {
      return [...prevUsers, data];
    });
  };

  return (
    <>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      <Card>
        {users.length == 0 && <div>No users data</div>}
        {users.length > 0 && <UsersList users={users} />}
      </Card>
    </>
  );
}

export default App;
