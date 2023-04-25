import React, { useState, useEffect } from 'react';
import './App.css';
// import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';


function App() {
  const [err, setErr] = useState('');
  const [orders, setOrders] = useState([]);
  
const getOrders = () => {
    return fetch('http://localhost:3001/api/v1/orders')
    .then(response =>  {
      return response.json()
  })
  }

  
  useEffect(() => {
    getOrders()
    .then((data) => {
      return setOrders(data.orders);
    })
  }, []);


const addOrder = (newOrder) => {
  fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  })
  .then(response => response.json())
  .then(data => setOrders([...orders, data]))
  .catch(err => setErr(err.message));
}

console.log(orders)
  return (
    
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder} />
      </header>
      <Orders orders={orders} />

    </main>
  );
}

export default App;

