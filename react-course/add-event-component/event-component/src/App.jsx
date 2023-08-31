import { useState } from "react";

const DUMMY_EVENTS = [
  { name: "Testo", date: "2022-12-21", location: "Luogo" },
  { name: "Testo", date: "2022-12-21", location: "Luogo" },
  { name: "Testo", date: "2022-12-21", location: "Luogo" },
  { name: "Testo", date: "2022-12-21", location: "Luogo" },
  { name: "Testo", date: "2022-12-21", location: "Luogo" },
];

function App() {
  const [eventItem, setEventItem] = useState("");

  const nameHandler = (event) => {
    console.log(event.target.value);
  };

  const dateHandler = (event) => {
    console.log(event.target.value);
  };

  const locationHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Add an event to the list</h1>
      <form action="">
        <input type="text" onChange={nameHandler} />
        <label> Name</label>
        <br />
        <input type="date" name="" id="" onChange={dateHandler} />
        <label htmlFor=""> Date</label>
        <br />
        <input type="text" name="" id="" onChange={locationHandler} />
        <label htmlFor=""> Location</label>
        <br />
        <button type="submit">Add event</button>
      </form>
      <div>
        <h2>Event list</h2>
        <ul>
          {DUMMY_EVENTS.map((item) => {
            return (
              <li>
                {item.name}, {item.location}, {item.date}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
