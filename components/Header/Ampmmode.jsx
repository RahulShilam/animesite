"use client";
import { useState } from "react";

export default function Ampmmode() {
  const [mode, setMode] = useState("Light");
  const handleMode = () => {
    setMode(mode == "Light" ? "Dark" : "Light");
    console.log(mode);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <button
        style={{
          background: mode == "Light" ? "white" : "black",
          color: mode == "Light" ? "black" : "white",
          borderRadius: "5px",
          width: "150px",
          height: "40px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={handleMode}
      >
        {mode == "Light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
