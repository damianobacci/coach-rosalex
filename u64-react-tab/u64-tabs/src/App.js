import logo from "./logo.png";
import "./App.css";

import { useState } from "react";

const content = [
  [
    "Very cool website",
    "Incredible archive",
    "Fun people, Indian links hidden through the website",
  ],
  ["Beta & Cancelled Video Games", "Videos", "How to Help", "Yota"],
  ["Hidden Palace", "Assemblergames", "The Changing Light at Sandover"],
  ["Se stai vedendo questo video...", "LoveDeLic", "Napo"],
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <header>
        <img src={logo} alt="Unseen64 logo" />
        <div>
          <h1>Unseen64</h1>
          <p>The greatest website about beta videogames</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeTab === 0 ? "active" : ""}
            onClick={() => setActiveTab(0)}
          >
            Why Unseen64?
          </button>
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => setActiveTab(1)}
          >
            Core Sections
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => setActiveTab(2)}
          >
            Related Links
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => setActiveTab(3)}
          >
            Gekigemu
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeTab].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
