import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateEmployeeForm from "../components/CreatePostForm";
import EmployeeList from "../components/PostsList";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreateEmployeeForm />
        </Col>
        <Col size="md-6 sm-12">
          <EmployeeList />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
