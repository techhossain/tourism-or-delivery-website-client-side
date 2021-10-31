import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const ManageOrders = () => {

  const { user, setUser } = useAuth();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('https://possessed-ghost-59800.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);

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
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
        })
    }
  }

  const handleUpdate = id => {

    axios.put(`https://possessed-ghost-59800.herokuapp.com/orders/${id}`, {
      status: 'success'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container my-5">
      {
        orders.map(order =>
          <Card key={order._id} className="my-2">
            <Card.Body className="">
              <h5>Tour ID: {order.tourId}</h5>
              <p>Client: {order.name}</p>
              <p>Mobile: {order.mobile}</p>
              <p>Email: {order.email}</p>
              <Button className="btn btn-danger mx-2" variant="danger" onClick={() => { handleDelete(order._id) }}>Delete</Button>
              <Button className="btn btn-success mx-2" variant="danger" onClick={() => { handleUpdate(order._id) }}>Confirm Booking</Button>
            </Card.Body>
          </Card>
        )
      }
    </div>
  );
};

export default ManageOrders;