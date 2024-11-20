import { useState } from "react";
import "./App.css";
import Listitem from "./components/Listitem";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const deleteItem = (index) => {
    const newItems = items.filter((el, i) => i != index);
    setItems(newItems);
  };
  const addItem = () => {
    {
      if (name == "") {
        return;
      }
    }
    const newItemsAr = [...items, name];
    setItems(newItemsAr);
    setName("");
  };
  const editItem = (index) => {
    setName(items[index]);
    setEditing(true);
    setCurrentIndex(index);
  };

  const updateItem = (index) => {
    // alert("anchor")
    {
      if (name == "") {
        return;
      }
      
    }

    const updateItems = items.map((el, i) => (i == currentIndex) ? name : el);
    setItems(updateItems);
    setName("");
    setEditing(false);
    setCurrentIndex(null);
  };
  const handleeneter = (e) => {
    if (e.key == "Enter") {
      {editing == true ? updateItem() : addItem() };
  }
}

 

  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input
          className="form-control"
          onKeyUp={handleeneter}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="New"
        />
        <button className="btn btn-sm btn-warning" onClick={editing == true ? updateItem : addItem}>
          {
          (editing == true) ? "Update" : "Add"
          
          }
        </button>
      </div>
      <table className="table table-bordered" style={{ width: "500px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            return (
              <Listitem
                deleteItem={deleteItem}
                editItem={editItem}
                item={item}
                key={i}
                index={i}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
