import React, { useState } from 'react';
import reactLogo from "./assets/pokemon.png";
import "./App.css";

function App() {
  
  const [isGlowing, setIsGlowing] = useState(false);
  const toggleGlow = () => {
    setIsGlowing(!isGlowing);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={reactLogo}
          className={`logo react ${isGlowing ? 'glowing' : ''}`}
          alt="React logo"
        />

        <h1>ポケモン</h1>
        <button onClick={toggleGlow}>ボタン</button>
      </header>
    </div>
  );
}

export default App;