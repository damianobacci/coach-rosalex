import logo from "./logo.png";
import "./App.css";

import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
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
