import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$69.99'},
    {name: 'PDF Reader', price: '$30.99'},
    {name: 'MS Word', price: '$99.99'},
    {name: 'Adove XD', price: '$50,99'},
    {name: 'PowerPoint', price: '$67.99'},
    {name: 'Microsoft Excel', price: '$79.99'},
    {name: 'Ms Onenote', price: '$50,99'},
    {name: 'Ms Outlook', price: '$67.99'},
    {name: 'Ms Publisher', price: '$79.99'}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      <div>
          {
            products.map(pd => <Product product={pd}></Product>)
          } 
      </div>
      
      </header>
    </div> 
  );
}

function Counter(){
  const [count, setCount] = useState(15);
  
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li >{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: "1px solid gray", borderRadius: "5px", backgroundColor: "lightgray", height: "200px", width: "200px",
    color: "black", float: "left", margin: "30px",  }
  const buttonStyle = {
    borderRadius: "10px", height:'35px', width:'90px', backgroundColor:'gray',color:'cyan',border:'none', fontSize: '17px', fontWeight:'bold'} 

  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}

export default App;
