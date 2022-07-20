import React from "react";
import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false);

  function handleDarkLightClick(){
    setIsDark((isDark) => !isDark);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
        <button onClick={handleDarkLightClick}>{isDark ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
