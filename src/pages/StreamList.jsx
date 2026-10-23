import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function StreamList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;

    // Week 1 requirement: display the user's input on the console.
    console.log("StreamList input:", value);

    setItems((prev) => [...prev, value]);
    setInput("");
  };

  return (
    <section className="page">
      <h1>StreamList</h1>
      <p className="subtitle">
        Add a movie or show you want to watch. Your entry is logged to the
        browser console.
      </p>

      <form className="stream-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a movie or show title..."
          aria-label="Movie or show title"
        />
        <button type="submit">
          <FaPlus /> Add
        </button>
      </form>

      {items.length > 0 && (
        <ul className="stream-items">
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default StreamList;
