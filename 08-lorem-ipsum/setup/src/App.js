import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    settext(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h2>lorem ipsum project setup</h2>
      <form action="" onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragrahs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setcount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
