import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          backgroundColor={"#000"}
          onClick={() => {
            console.log("Button Pressed");
          }}
          label="Click Me"
        />
      </header>
    </div>
  );
}

export default App;
