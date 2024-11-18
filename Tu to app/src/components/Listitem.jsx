
function Listitem(props) {

    return (
         <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.item}</td>
            <td><button onClick={ () => {props.deleteItem(props.index)} } className="btn btn-sm btn-danger">Del</button></td>
          </tr>
    )
}

export default Listitem;