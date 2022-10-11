import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menu, setmenu] = useState(items);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setmenu(items);
      return;
    }
    let newItems = items.filter((item) => category === item.category);
    setmenu(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
