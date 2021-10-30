import { useState, useEffect } from "react";

const useTours = () => {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('./tours.json')
      .then(res => res.json())
      .then(data => setTours(data))
  }, []);

  return [tours];
}
export default useTours;

