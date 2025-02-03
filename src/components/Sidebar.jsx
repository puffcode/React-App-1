import { useState, useCallback } from "react";
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("");
  let [menuItems, setMenuItems] = useState([]);
  let [filter, setFilter] = useState("");

  let addMenuItem = useCallback(() => {
    setMenuItems([...menuItems, newMenuItem]);
    setNewMenuItem("");
    console.log("Added menu item");
  }, [newMenuItem, menuItems]);

  return (
    <div>
      <ul>
        {menuItems
          .filter((item) => item.includes(filter))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  );
}
