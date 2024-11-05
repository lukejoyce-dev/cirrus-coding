import React from "react";
import Layout from "../components/layout/Layout";
import { Container } from "../components/ui/Container";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Layout>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </Layout>
    </Container>
  );
};

export default NotFound;
