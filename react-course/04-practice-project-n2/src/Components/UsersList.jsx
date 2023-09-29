const UsersList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
