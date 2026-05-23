import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  // 🔥 HEX convert
  const getHex = (color) => {
    const div = document.createElement("div");
    div.style.color = color;
    document.body.appendChild(div);

    const rgb = getComputedStyle(div).color;
    document.body.removeChild(div);

    const values = rgb.match(/\d+/g);
    if (!values) return "";

    return (
      "#" +
      values
        .slice(0, 3)
        .map((v) => Number(v).toString(16).padStart(2, "0"))
        .join("")
    );
  };

  // ➕ Add color
  const addColor = () => {
    if (color.trim() === "") return;

    setColors([...colors, color]);
    setColor("");
  };

  const lastColor = colors[colors.length - 1];
  const hexValue = lastColor ? getHex(lastColor) : "";

  return (
    <div className="container">

      {/* 🎨 Color Box */}
      <div
        className="box"
        style={{ backgroundColor: lastColor || "white" }}
      >
        {colors.length === 0 ? "Empty Value" : hexValue}
      </div>

      {/* 🔢 Total Count */}
      <h3>Total Colors: {colors.length}</h3>

      {/* ⌨️ Input */}
      <input
        type="text"
        placeholder="Add color name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {/* 🔘 Button */}
      <button onClick={addColor}>
        Add Color
      </button>

    </div>
  );
}

export default App;