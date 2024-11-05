import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Meters</h1>
        <div>
          <Link to="/meter/61a13df5-5fb7-46e9-8710-e9643a9ee4fd">Meter 1</Link>
        </div>
        <div>
          <Link to="/meter/3b7b8e17-be06-4205-a650-94286bf39d73">Meter 2</Link>
        </div>
        <div>
          <Link to="/meter/ed3e3282-f725-4f33-a1bb-b8d45e3f14e6">Meter 3</Link>
        </div>
        <div>
          <Link to="/meter/6026b5b3-9e96-4d26-a6ac-74cd0ecbdbfb">Meter 4</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
