import React, { useState } from "react";
import "./styles.css";
import { TextField } from "@material-ui/core/";
import { Button } from "@material-ui/core";

export default function App() {
  const [state, setState] = useState("User");
  let name = "";

  const handleChange = event => {
    name = event.target.value;
  };

  const handleClick = () => {
    setState(name);
  };

  return (
    <div className="App">
      <h1>Hi {state}! Welcome to the world of front end</h1>
      <TextField
        variant="outlined"
        color="primary"
        label="Your name"
        onChange={handleChange}
      />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClick}
        style={{ marginTop: "2rem" }}
      >
        Submit
      </Button>
    </div>
  );
}
