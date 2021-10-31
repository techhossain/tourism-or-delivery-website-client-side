import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import useTours from '../../../hooks/useTours';

const ManageTours = () => {

  const [tours, setTours] = useTours();
  const handleDelete = (id) => {
    const url = `https://possessed-ghost-59800.herokuapp.com/tours/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = tours.filter(tour => tour._id !== id);
        setTours(remaining);
      })
  }

  return (
    <div className="container">
      <h2 className="text-center my-5">Manage Tours</h2>
      {

        tours.map(tour => <Card key={tour._id}>
          <Card.Body className="d-flex justify-content-between"><h5>{tour.title}</h5>
            <div>
              <Button className="btn btn-danger mx-2" variant="danger" onClick={() => { handleDelete(tour._id) }}>Delete</Button>
            </div>
          </Card.Body>
        </Card>)
      }
    </div>
  );
};

export default ManageTours;