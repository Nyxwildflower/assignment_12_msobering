import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import HeroImage from "./components/HeroImage/HeroImage";
import Img from "./components/Img/Img";
import Label from "./components/Label/Label";

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
      <Label
        label="Announcement!"
        backgroundColor="#2E3944"
        fontSize="5em"
        fontColor="#FFF"
      />
      <Label label="Label without background" fontSize="2em" fontColor="#FFF" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          backgroundColor={"#D3D9D4"}
          size="30%"
          title="Title"
          subtitle="Subtitle"
          content="Content"
        />
        <Card
          backgroundColor={"#D3D9D4"}
          size="30%"
          title="Title"
          subtitle="Subtitle"
        />
        <Card
          backgroundColor={"#D3D9D4"}
          size="30%"
          title="Title"
          content="Content with no subtitle"
        />
      </div>
      <Dropdown
        label="Choose"
        name="test-dropdown"
        options={["option 1", "option 2", "option 3"]}
        backgroundColor="#748D92"
        size="50%"
      />
      <Img
        srcLink="leaves.png"
        altText="An illustration of leaves in warm colours"
        maxWidth="50%"
        maxHeight="200px"
      />
      <HeroImage
        srcLink="leaves.png"
        altText="An illustration of leaves in warm colours"
        maxHeight="600px"
      />
    </div>
  );
}

export default App;
