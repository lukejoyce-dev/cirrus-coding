import React from "react";
import { useParams } from "react-router-dom";

const Meter: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the 'id' parameter from the URL

  return (
    <div>
      <h1>Meter Details</h1>
      <p>Meter ID: {id}</p>
    </div>
  );
};

export default Meter;
