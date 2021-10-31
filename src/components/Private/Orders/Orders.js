import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
  const { user, setUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://possessed-ghost-59800.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);

  const singleUserOrder = orders.filter(order => order.email === user.email)

  const handleDelete = (id) => {
    const deleteDecision = window.confirm("Are you sure you want to Delete ?");

    if (deleteDecision) {
      const url = `https://possessed-ghost-59800.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = singleUserOrder.filter(order => order._id !== id);
          setOrders(remaining);
        })
    }
  }
  return (
    <div className="container my-5">
      {
        singleUserOrder.map(order =>
          <Card key={order._id} className="my-2">
            <Card.Body className="">
              <h5>Tour ID: {order.tourId}</h5>
              <p>Client: {order.name}</p>
              <p>Mobile: {order.mobile}</p>
              <p>Email: {order.email}</p>
              <p>Order Status: <b>{order.status}</b></p>
              <Button className="btn btn-danger mx-2" variant="danger" onClick={() => { handleDelete(order._id) }}>Delete</Button>
            </Card.Body>
          </Card>

        )
      }
    </div>
  );
};

export default Orders;