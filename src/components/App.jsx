import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(""); // State to hold input value
  const [items, setItems] = useState([]); // State to hold list items

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value state
  };

  // Function to handle adding item to list
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      // Check if input value is not empty
      setItems([...items, inputValue]); // Add input value to items array
      setInputValue(""); // Clear input value
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Render each item as li
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
