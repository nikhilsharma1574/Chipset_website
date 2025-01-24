

function Fruits() {
    let fruits =[{name:'apple',price:'100rs'}
        ,{name:'banana',price:'200rs'},{name:'cherry',price:'300rs'}];
    
  return (
    <div><ul> {fruits.map((fruit, index) => ( <li key={index}>{fruit.name}</li>))}
    </ul>
    </div>
  )
}


export default Fruits