import React from 'react';
import Card from '../../components/Card/Card';
import './Orders.css';

const Orders = ({ orders }) => {
  console.log('orderscomponent', orders)
  const orderEls = orders.length
    ? orders.map(order => {
        return (
          <Card key={order.id}>
            <div className="order">
              <h3>{order.name}</h3>
              <ul className="ingredient-list">
                {order.ingredients.map(ingredient => {
                  return <li key={ingredient}>{ingredient}</li>;
                })}
              </ul>
            </div>
          </Card>
        );
      })
    : <p>No orders yet!</p>;

  return (
    <section>
      {orderEls}
    </section>
  );
};

export default Orders;
