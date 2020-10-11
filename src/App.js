import React from 'react';
import './Styles/App.css';
import Game from './Game'

function App() {
  return (
    <div className="App" style={{
      background: "#264653", padding: "50px", maxWidth: "700px",
      marginRight: "auto",
      marginLeft: "auto"
    }}>
      <Game />
    </div>
  );
}

export default App;
