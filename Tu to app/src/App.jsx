import { useState } from 'react'
import './App.css'
import Listitem from './components/Listitem';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const deleteItem = (index) => {
    const newItems = items.filter((el, i) => i != index);
    setItems(newItems);
  }

  const updateItem = (index) => {
    const newItems = [...items];
    newItems[index] = name;
    setItems(newItems);
  }

  const addItem = () => {
    const newItemsAr = [...items, name];
    setItems(newItemsAr);
    setName("");
  }

  return (
    <div>
      <div className='d-flex gap-2 mb-3'>
        <input className='form-control' onChange={(e) => {setName(e.target.value)}  } value={name} type='text' placeholder='New' />
        <button className='btn btn-sm btn-warning' onClick={addItem}>Add</button>
      </div>
  <table className="table table-bordered" style={{ width: "500px" }}>

<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Item Name</th>
    <th scope="col">Actions Delete</th>
    <th scope="col">Actions Update</th>
    <th scope="col">Actions Edite</th>
  </tr>
</thead>
<tbody>
          {
            items.map((item, i) => {
              return (
                <Listitem deleteItem={deleteItem} updateItem={updateItem} item={item} key={i} index={i} />
              )
            })
          }
        </tbody>
    </table>
    </div>
  )
}

export default App
