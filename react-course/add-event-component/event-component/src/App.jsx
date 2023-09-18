import { useState } from "react";

const DUMMY_EVENTS = [
  {
    name: "Chess Fair",
    date: new Date(2022, 11, 21),
    location: "New York City, United States",
  },
  {
    name: "Primavera Sound Festival",
    date: new Date(2022, 11, 21),
    location: "Barcelona, Spain",
  },
  {
    name: "MIAMI Festival",
    date: new Date(2024, 8, 1),
    location: "Milan, Italy",
  },
  {
    name: "2024 Summer Olympics",
    date: new Date(2024, 7, 1),
    location: "Paris, France",
  },
];

function App() {
  const [eventItem, setEventItem] = useState(DUMMY_EVENTS);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: new Date(),
    location: "",
  });

  const nameHandler = (event) => {
    setNewEvent({
      ...newEvent,
      name: event.target.value,
    });
  };

  const dateHandler = (event) => {
    setNewEvent({
      ...newEvent,
      date: new Date(event.target.value),
    });
  };

  const locationHandler = (event) => {
    setNewEvent({
      ...newEvent,
      location: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!newEvent.name || !newEvent.date || !newEvent.location) {
      alert("All fields are required.");
      return;
    }
    setEventItem((prevEvents) => {
      return [newEvent, ...prevEvents];
    });

    setNewEvent({
      name: "",
      date: new Date(),
      location: "",
    });
  };

  return (
    <div>
      <h1>Add an event to the list</h1>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={newEvent.name} onChange={nameHandler} />
        <label> Name</label>
        <br />
        <input
          type="date"
          value={newEvent.date.toISOString().split("T")[0]}
          onChange={dateHandler}
        />
        <label htmlFor=""> Date</label>
        <br />
        <input
          type="text"
          value={newEvent.location}
          onChange={locationHandler}
        />
        <label htmlFor=""> Location</label>
        <br />
        <button type="submit">Add event</button>
      </form>
      <div>
        <h2>Event list</h2>
        <ul>
          {eventItem.map((item, index) => {
            return (
              <li key={index}>
                {item.name}, {item.location}, {item.date.toDateString()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
