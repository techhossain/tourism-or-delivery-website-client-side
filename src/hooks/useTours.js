import { useState, useEffect } from "react";

const useTours = () => {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('https://possessed-ghost-59800.herokuapp.com/tours')
      .then(res => res.json())
      .then(data => setTours(data))
  }, []);

  return [tours, setTours];
}
export default useTours;

