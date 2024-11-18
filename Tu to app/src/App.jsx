import { useState } from 'react'
import './App.css'
import Listitem from './components/Listitem';

function App() {
  const [items, setItems] = useState(['apple', 'banana']);

  return (
    <div>
<table className="table table-bordered" style={{ width: "500px" }}>

<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Item Name</th>
    <th scope="col">Actions</th>
  </tr>
</thead>
<tbody>
          {
            items.map((item, i) => {
              return (
                <Listitem item={item} key={i} index={i} />
              )
            })
          }
        </tbody>
    </table>
    </div>
  )
}

export default App
