import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Button
        backgroundColor={"#000"}
        onClick={() => {
          console.log("Button Pressed");
        }}
        label="Click Me"
      />
      <Card
        backgroundColor={"#D3D9D4"}
        title="test"
        content="Content with no subtitle"
      />
    </div>
  );
}

export default App;
