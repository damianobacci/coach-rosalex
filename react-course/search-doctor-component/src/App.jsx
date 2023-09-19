import { useState } from "react";
import "./App.css";

function App() {
  const [doctorsList, setDoctorsList] = useState([]);

  const search = async (q) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setDoctorsList(data);
  };

  return (
    <main>
      <h1>Search for a medical specialist near you</h1>
      <input
        type="text"
        placeholder="Search a doctor"
        onChange={(event) => search(event.target.value)}
      />
      <ul>
        {doctorsList.map((doctor) => (
          <li key={doctor.id}>
            <strong>{doctor.name}</strong>, {doctor.profession},{" "}
            {doctor.address}, {doctor.city}, {doctor.phone}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
